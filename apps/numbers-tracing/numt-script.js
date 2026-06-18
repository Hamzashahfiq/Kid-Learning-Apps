const numbers = Array.from({length:20}, (_,i)=> (i+1).toString());

const grid = document.getElementById("grid");

let currentNumber = "";

// CANVAS
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let guideCanvas = document.getElementById("guideCanvas");
let gctx = guideCanvas.getContext("2d");

let drawing = false;

// COLORS
let colors = [
  "#FFCDD2","#F8BBD0","#E1BEE7","#D1C4E9",
  "#BBDEFB","#C8E6C9","#FFF9C4","#FFE0B2"
];

// GRID CREATE
numbers.forEach((n,i)=>{
  let card = document.createElement("div");
  card.className = "card";
  card.innerText = n;

  card.style.background = colors[i % colors.length];

  card.onclick = ()=>openPopup(n);

  grid.appendChild(card);
});

// OPEN POPUP
function openPopup(num){
  currentNumber = num;

  document.getElementById("popup").classList.remove("hidden");

  drawGuide(num);
  clearCanvas();
}

// CLOSE
function closePopup(){
  document.getElementById("popup").classList.add("hidden");
}

function outsideClick(e){
  if(e.target.id === "popup") closePopup();
}

// GUIDE DRAW
function drawGuide(num){

  gctx.clearRect(0, 0, 320, 260);

  gctx.font = "180px Arial";
  gctx.textAlign = "center";
  gctx.textBaseline = "middle";

  // light base
  gctx.fillStyle = "#eee";
  gctx.fillText(num, 160, 130);

  // dashed outline
  gctx.setLineDash([8, 10]);
  gctx.strokeStyle = "#666";
  gctx.lineWidth = 3;
  gctx.strokeText(num, 160, 130);

  gctx.setLineDash([]);
}

// DRAW SYSTEM
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
  drawing=true;
  let p=getPos(e);

  ctx.beginPath();
  ctx.moveTo(p.x,p.y);
}

function draw(e){
  if(!drawing) return;

  let p = getPos(e);

  ctx.lineTo(p.x, p.y);

  ctx.strokeStyle = "#000";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.stroke();
}

function stop(){
  drawing=false;
}

// CLEAR
function clearCanvas(){
  ctx.clearRect(0,0,320,260);
  document.getElementById("msg").innerText="";
}

// CHECK
function checkAccuracy(){

  let user = ctx.getImageData(0,0,320,260).data;
  let guide = gctx.getImageData(0,0,320,260).data;

  let match = 0;
  let total = 0;

  let tolerance = 6;

  for(let i=0;i<guide.length;i+=4){

    if(guide[i+3] > 50){

      total++;

      let ok = false;

      for(let t=-tolerance; t<=tolerance; t+=4){

        let idx = i + (t * 4);

        if(idx >= 0 && idx < user.length){
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

  if(score >= 65){
    msg.innerHTML = "🎉 Good Job!";
    msg.style.color = "green";
    msg.style.background = "#e8f5e9";
  } else {
    msg.innerHTML = "❌ Try Again";
    msg.style.color = "red";
    msg.style.background = "#ffebee";
  }
}

// NAV
function nextItem(){
  let i=numbers.indexOf(currentNumber);
  if(i<numbers.length-1){
    openPopup(numbers[i+1]);
  }
}

function prevItem(){
  let i=numbers.indexOf(currentNumber);
  if(i>0){
    openPopup(numbers[i-1]);
  }
}

window.openPopup = openPopup;
window.closePopup = closePopup;
window.outsideClick = outsideClick;
window.clearCanvas = clearCanvas;
window.checkAccuracy = checkAccuracy;
window.nextItem = nextItem;
window.prevItem = prevItem;