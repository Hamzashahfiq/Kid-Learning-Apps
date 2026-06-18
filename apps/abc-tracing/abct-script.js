const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const grid = document.getElementById("grid");

let currentLetter = "";

// CANVAS
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let guideCanvas = document.getElementById("guideCanvas");
let gctx = guideCanvas.getContext("2d");
let guideMask = null;
let drawing = false;

// COLORS
let colors = [
  "#FFCDD2","#F8BBD0","#E1BEE7","#D1C4E9",
  "#BBDEFB","#C8E6C9","#FFF9C4","#FFE0B2"
];

// GRID CREATE
letters.forEach((l,i)=>{
  let card = document.createElement("div");
  card.className = "card";
  card.innerText = l;

  card.style.background = colors[i % colors.length];

  card.onclick = ()=>openPopup(l);

  grid.appendChild(card);
});

// OPEN POPUP
function openPopup(letter){

  currentLetter = letter;

  document.getElementById("popup").classList.remove("hidden");

  drawGuide(letter);
  clearCanvas();
}

// CLOSE POPUP
function closePopup(){
  document.getElementById("popup").classList.add("hidden");
}

function outsideClick(e){
  if(e.target.id === "popup") closePopup();
}
/*
// GUIDE DRAW (dashed letter)
function drawGuide(letter){
  gctx.clearRect(0, 0, 320, 260);
  gctx.font = "180px Arial";
  gctx.textAlign = "center";
  gctx.textBaseline = "middle";
  
  // STEP 1: light filled base (so shape visible)
  gctx.fillStyle = "#eee";
  gctx.fillText(letter, 160, 130);

  // STEP 2: center dashed guide on top
  gctx.setLineDash([8, 10]);

  gctx.strokeStyle = "#666";   // 👈 thora dark (visible)
  gctx.lineWidth = 3;
  gctx.strokeText(letter, 160, 130);
  gctx.setLineDash([]);
}*/

function drawGuide(letter){
  gctx.clearRect(0, 0, 320, 260);
  gctx.font = "180px Arial";
  gctx.textAlign = "center";
  gctx.textBaseline = "middle";
  gctx.fillStyle = "#eee";
  gctx.fillText(letter, 160, 130);
  gctx.setLineDash([8, 10]);
  gctx.strokeStyle = "#666";
  gctx.lineWidth = 3;
  gctx.strokeText(letter, 160, 130);
  gctx.setLineDash([]);

  // CREATE LETTER MASK
  guideMask = gctx.getImageData(0,0,320,260).data;
}

function isInsideLetter(x,y){
  if(!guideMask) return false;
  x = Math.floor(x);
  y = Math.floor(y);
  if(x < 0 || x >= 320 || y < 0 || y >= 260)
    return false;
  let index = (y * 320 + x) * 4;
  return guideMask[index + 3] > 40;
}

// DRAWING SYSTEM
canvas.addEventListener("mousedown",start);
canvas.addEventListener("mousemove",draw);
canvas.addEventListener("mouseup",stop);

canvas.addEventListener("touchstart",start);
canvas.addEventListener("touchmove",draw);
canvas.addEventListener("touchend",stop);

function getPos(e){
  let r = canvas.getBoundingClientRect();

  return {
    x:(e.touches?e.touches[0].clientX:e.clientX)-r.left,
    y:(e.touches?e.touches[0].clientY:e.clientY)-r.top
  };
}

function start(e){
  let p = getPos(e);
  if(!isInsideLetter(p.x,p.y))
    return;
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(p.x,p.y);
}
/*
function draw(e){
  if(!drawing) return;
  let p = getPos(e);
  if(!isInsideLetter(p.x,p.y)){
    drawing = false;
    return;
  }
  ctx.lineTo(p.x, p.y);
ctx.strokeStyle = "#4CAF50";
ctx.lineWidth = 25;     // 4 se 25
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.stroke();
}
*/
function draw(e){
  if(!drawing) return;
  let p = getPos(e);
  if(!isInsideLetter(p.x,p.y)){
    drawing = false;
    return;
  }

  ctx.fillStyle = "#4CAF50";

  ctx.beginPath();
  ctx.arc(p.x, p.y, 10, 0, Math.PI*2);
  ctx.fill();
}

function stop(){
  drawing=false;
}

// CLEAR
function clearCanvas(){
  ctx.clearRect(0,0,320,260);
  document.getElementById("msg").innerText="";
}

// ACCURACY CHECK (tolerant)
function checkAccuracy(){

  let user = ctx.getImageData(0,0,320,260).data;
  let guide = gctx.getImageData(0,0,320,260).data;

  let match = 0;
  let total = 0;

  let tolerance = 6;   // 👈 REDUCED (was 10-12 before)

  for(let i=0;i<guide.length;i+=4){

    // only strong guide pixels count
    if(guide[i+3] > 50){

      total++;

      let ok = false;

      for(let t=-tolerance; t<=tolerance; t+=4){

        let idx = i + (t * 4);

        if(idx >= 0 && idx < user.length){

          // only strong drawing pixels
          if(user[idx+3] > 80){
            ok = true;
            break;
          }
        }
      }

      if(ok) match++;
    }
  }

  let score = (match / total) * 100;

  let msg = document.getElementById("msg");

  console.log("Score:", score);

  // 👇 STRICTER PASS RULE
  if(score >= 65){
    msg.innerHTML = "🎉 Good Job!";
    msg.style.color = "green";
	msg.style.background = score >= 65 ? "#e8f5e9" : "#ffebee";
  } else {
    msg.innerHTML = "❌ Try Again";
    msg.style.color = "red";
  }
}

// NAVIGATION
function nextItem(){
  let i=letters.indexOf(currentLetter);
  if(i<letters.length-1){
    openPopup(letters[i+1]);
  }
}

function prevItem(){
  let i=letters.indexOf(currentLetter);
  if(i>0){
    openPopup(letters[i-1]);
  }
}


// GLOBAL EXPORTS
window.openPopup = openPopup;
window.closePopup = closePopup;
window.outsideClick = outsideClick;
window.clearCanvas = clearCanvas;
window.checkAccuracy = checkAccuracy;
window.nextItem = nextItem;
window.prevItem = prevItem;