window.speechSynthesis.onvoiceschanged = () => {
    speechSynthesis.getVoices();
};

const colors = [
"#FFCDD2","#F8BBD0","#E1BEE7","#D1C4E9",
"#BBDEFB","#B2EBF2","#C8E6C9","#FFF9C4"
];

const data = {
"آ":[
{name:"آم", img:"../../assets/mango.webp"}
],

"ا":[
{name:"انار", img:"../../assets/apple.webp"}
],

"ب":[
{name:"بکری", img:"../../assets/goat.webp"},
{name:"بال", img:"../../assets/ball.webp"}
],

"پ":[
{name:"پانی", img:"../../assets/water.webp"},
{name:"پینسل", img:"../../assets/pencil.webp"}
],

"ت":[
{name:"تتلی", img:"../../assets/butterfly.webp"},
{name:"تاج", img:"../../assets/crown.webp"}
],

"ٹ":[
{name:"ٹماٹر", img:"../../assets/tomato.webp"},
{name:"ٹرین", img:"../../assets/train.webp"}
],

"ث":[
{name:"ثعلب", img:"../../assets/fox.webp"}
],

"ج":[
{name:"جہاز", img:"../../assets/aeroplane.webp"},
{name:"جوتا", img:"../../assets/shoe.webp"}
],

"چ":[
{name:"چاند", img:"../../assets/moon.webp"},
{name:"چڑیا", img:"../../assets/bird.webp"}
],

"ح":[
{name:"ہاتھی", img:"../../assets/elephant.webp"},
{name:"ہوا", img:"../../assets/wind.webp"}
],

"خ":[
{name:"خرگوش", img:"../../assets/rabbit.webp"}
],

"د":[
{name:"درخت", img:"../../assets/tree.webp"},
{name:"دروازہ", img:"../../assets/door.webp"}
],

"ڈ":[
{name:"ڈرم", img:"../../assets/drum.webp"}
],

"ذ":[
{name:"ذرافہ", img:"../../assets/giraffe.webp"}
],

"ر":[
{name:"ریچھ", img:"../../assets/bear.webp"},
{name:"ریڈ", img:"../../assets/red.webp"}
],

"ڑ":[
{name:"گاڑی", img:"../../assets/car.webp"}
],

"ز":[
{name:"زebra", img:"../../assets/zebra.webp"},
{name:"زنجیر", img:"../../assets/chain.webp"}
],

"ژ":[
{name:"ژالہ باری", img:"../../assets/hail.webp"}
],

"س":[
{name:"سانپ", img:"../../assets/snake.webp"},
{name:"ستارہ", img:"../../assets/star.webp"}
],

"ش":[
{name:"شیر", img:"../../assets/lion.webp"},
{name:"شہد", img:"../../assets/honey.webp"}
],

"ص":[
{name:"صوفہ", img:"../../assets/sofa.webp"}
],

"ض":[
{name:"ضفدق", img:"../../assets/frog.webp"}
],

"ط":[
{name:"طوطا", img:"../../assets/parrot.webp"}
],

"ظ":[
{name:"ظرف", img:"../../assets/bowl.webp"}
],

"ع":[
{name:"عینک", img:"../../assets/glasses.webp"}
],

"غ":[
{name:"غبارہ", img:"../../assets/balloon.webp"}
],

"ف":[
{name:"فیل", img:"../../assets/elephant.webp"}
],

"ق":[
{name:"قلم", img:"../../assets/pen.webp"}
],

"ک":[
{name:"کتاب", img:"../../assets/book.webp"},
{name:"کبوتر", img:"../../assets/pigeon.webp"}
],

"گ":[
{name:"گاۓ", img:"../../assets/cow.webp"}
],

"ل":[
{name:"لومڑی", img:"../../assets/fox.webp"}
],

"م":[
{name:"مکھی", img:"../../assets/fly.webp"},
{name:"مچھلی", img:"../../assets/fish.webp"}
],

"ن":[
{name:"ناریل", img:"../../assets/coconut.webp"}
],

"و":[
{name:"وقت", img:"../../assets/clock.webp"}
],

"ہ":[
{name:"ہاتھی", img:"../../assets/elephant.webp"},
{name:"ہوا", img:"../../assets/wind.webp"}
],

"ء":[
{name:"ہمزہ", img:"../../assets/hamza.webp"}
],

"ی":[
{name:"یخ", img:"../../assets/ice.webp"},
{name:"یار", img:"../../assets/friend.webp"}
],

"ے":[
{name:"یکہ", img:"../../assets/ice.webp"}
]
};

let currentLetter="";
let index=0;

// GRID
const grid = document.getElementById("grid");
const letters = Object.keys(data);

letters.forEach((letter,i)=>{
let card=document.createElement("div");
card.className="card";
card.innerText=letter;
card.style.background=colors[i % colors.length];
card.onclick=()=>openPopup(letter);
grid.appendChild(card);
});

function openPopup(letter){
currentLetter=letter;
index=0;
document.getElementById("popup").classList.remove("hidden");
showItem();
}

function showItem(){
let item=data[currentLetter][index];

document.getElementById("popup-header").innerText=currentLetter;
document.getElementById("popup-img").src=item.img;
document.getElementById("popup-text").innerText=item.name;

speak(currentLetter + " " + item.name);
}

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

function nextItem(){
let keys=Object.keys(data);
let i=keys.indexOf(currentLetter);
if(i < keys.length-1){
currentLetter=keys[i+1];
index=0;
showItem();
}
}

function prevItem(){
let keys=Object.keys(data);
let i=keys.indexOf(currentLetter);
if(i > 0){
currentLetter=keys[i-1];
index=0;
showItem();
}
}

function closePopup(){
document.getElementById("popup").classList.add("hidden");
}

function outsideClick(e){
if(e.target.id==="popup") closePopup();
}

function speak(text){
    let audio = new Audio(
        "https://translate.google.com/translate_tts?ie=UTF-8&tl=ur&client=tw-ob&q=" + encodeURIComponent(text)
    );
    audio.play();
}

function repeatSpeak(){
speak(currentLetter + " " + data[currentLetter][index].name);
}