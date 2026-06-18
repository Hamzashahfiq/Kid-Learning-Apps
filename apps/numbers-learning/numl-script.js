window.speechSynthesis.onvoiceschanged = () => {
    speechSynthesis.getVoices();
};

const colors = [
"#FFCDD2","#F8BBD0","#E1BEE7","#D1C4E9","#BBDEFB",
"#B2EBF2","#C8E6C9","#FFF9C4","#FFE0B2","#D7CCC8"
];

// NUMBER DATA (1–20)
const data = {
1:[{name:"One",img:"../../assets/one.webp"}],
2:[{name:"Two",img:"../../assets/two.webp"}],
3:[{name:"Three",img:"../../assets/three.webp"}],
4:[{name:"Four",img:"../../assets/four.webp"}],
5:[{name:"Five",img:"../../assets/five.webp"}],
6:[{name:"Six",img:"../../assets/six.webp"}],
7:[{name:"Seven",img:"../../assets/seven.webp"}],
8:[{name:"Eight",img:"../../assets/Eight.webp"}],
9:[{name:"Nine",img:"../../assets/Nine.webp"}],
10:[{name:"Ten",img:"../../assets/Ten.webp"}]
,
11:[{name:"Eleven",img:"../../assets/Eleven.webp"}],
12:[{name:"Twelve",img:"../../assets/Twelve.webp"}],
13:[{name:"Thirteen",img:"../../assets/Thirteen.webp"}],
14:[{name:"Fourteen",img:"../../assets/Fourteen.webp"}],
15:[{name:"Fifteen",img:"../../assets/Fifteen.webp"}],
16:[{name:"Sixteen",img:"../../assets/Sixteen.webp"}],
17:[{name:"Seventeen",img:"../../assets/Seventeen.webp"}],
18:[{name:"Eighteen",img:"../../assets/Eighteen.webp"}],
19:[{name:"Nineteen",img:"../../assets/Nineteen.webp"}],
20:[{name:"Twenty",img:"../../assets/Twenty.webp"}]
};

let currentLetter = "";
let index = 0;

// GRID
const numbers = Object.keys(data);

numbers.forEach((num, i) => {
let card = document.createElement("div");
card.className = "card";
card.innerText = num;
card.onclick = () => openPopup(num);
card.style.background = colors[i % colors.length];
grid.appendChild(card);
});

// OPEN POPUP
function openPopup(num){
currentLetter = num;
index = 0;
document.getElementById("popup").classList.remove("hidden");
showItem();
}

// SHOW ITEM
function showItem(){
let item = data[currentLetter][index];

document.getElementById("popup-header").innerText = currentLetter;
document.getElementById("popup-img").src = item.img;
document.getElementById("popup-text").innerText = item.name;

speak(currentLetter + " is " + item.name);
}

// NEXT / PREV NUMBER
function nextItem(){
let keys = Object.keys(data);
let currentIndex = keys.indexOf(currentLetter);

if(currentIndex < keys.length - 1){
    currentLetter = keys[currentIndex + 1];
    index = 0;
    showItem();
}
}

function prevItem(){
let keys = Object.keys(data);
let currentIndex = keys.indexOf(currentLetter);

if(currentIndex > 0){
    currentLetter = keys[currentIndex - 1];
    index = 0;
    showItem();
}
}

// CLOSE
function closePopup(){
document.getElementById("popup").classList.add("hidden");
}

function outsideClick(e){
if(e.target.id === "popup") closePopup();
}

// IMAGE NAV (if multiple images later)
function nextImage(){
if(index < data[currentLetter].length - 1){
index++;
showItem();
}
}

function prevImage(){
if(index > 0){
index--;
showItem();
}
}

// SPEAK
function speak(text){
speechSynthesis.cancel();

let msg = new SpeechSynthesisUtterance(text);
let voices = speechSynthesis.getVoices();

let voice = voices.find(v =>
v.lang.includes("en") ||
v.name.toLowerCase().includes("female")
);

if(voice) msg.voice = voice;

msg.lang = "en-US";
msg.rate = 0.9;
msg.pitch = 1.1;

speechSynthesis.speak(msg);
}

// repeat sound
function repeatSpeak(){
showItem();
}