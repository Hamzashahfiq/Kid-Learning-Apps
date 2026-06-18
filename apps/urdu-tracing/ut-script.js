const letters = [
"آ","ا","ب","پ","ت","ٹ","ث","ج","چ","ح","خ",
"د","ڈ","ذ","ر","ڑ","ز","ژ","س","ش","ص",
"ض","ط","ظ","ع","غ","ف","ق","ک","گ","ل",
"م","ن","ں","و","ہ","ھ","ء","ی","ے"
];

const grid = document.getElementById("grid");

let currentLetter = "";

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

// GUIDE DRAW
function drawGuide(letter){

  gctx.clearRect(0,0,320,260);

  gctx.direction = "rtl";
  gctx.textAlign = "center";
  gctx.textBaseline = "middle";

  gctx.font = "180px 'Jameel Noori Nastaleeq','Noto Nastaliq Urdu',serif";

  // light fill
  gctx.fillStyle = "#eeeeee";
  gctx.fillText(letter,160,130);

  // dashed guide
  gctx.setLineDash([8,10]);

  gctx.strokeStyle = "#666";
  gctx.lineWidth = 3;

  gctx.strokeText(letter,160,130);

  gctx.setLineDash([]);
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
    x:(e.touches ? e.touches[0].clientX : e.clientX) - r.left,
    y:(e.touches ? e.touches[0].clientY : e.clientY) - r.top
  };
}

function start(e){

  drawing = true;

  let p = getPos(e);

  ctx.beginPath();
  ctx.moveTo(p.x,p.y);
}

function draw(e){

  if(!drawing) return;

  e.preventDefault();

  let p = getPos(e);

  ctx.lineTo(p.x,p.y);

  ctx.strokeStyle = "#000";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.stroke();
}

function stop(){
  drawing = false;
}

// CLEAR
function clearCanvas(){

  ctx.clearRect(0,0,320,260);

  document.getElementById("msg").innerText = "";
}

// ACCURACY CHECK
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

      for(let t=-tolerance;t<=tolerance;t+=4){

        let idx = i + (t*4);

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

    msg.innerHTML = "🎉 شاباش!";
    msg.style.color = "green";
    msg.style.background = "#e8f5e9";

  }else{

    msg.innerHTML = "❌ دوبارہ کوشش کریں";
    msg.style.color = "red";
    msg.style.background = "#ffebee";
  }
}

// NAVIGATION
function nextItem(){

  let i = letters.indexOf(currentLetter);

  if(i < letters.length-1){

    openPopup(letters[i+1]);
  }
}

function prevItem(){

  let i = letters.indexOf(currentLetter);

  if(i > 0){

    openPopup(letters[i-1]);
  }
}

// EXPORTS
window.openPopup = openPopup;
window.closePopup = closePopup;
window.outsideClick = outsideClick;
window.clearCanvas = clearCanvas;
window.checkAccuracy = checkAccuracy;
window.nextItem = nextItem;
window.prevItem = prevItem;