window.speechSynthesis.onvoiceschanged = () => {
    speechSynthesis.getVoices();
};

const colors = [
"#FFCDD2",
"#F8BBD0",
"#E1BEE7",
"#D1C4E9",
"#BBDEFB",
"#B2EBF2",
"#C8E6C9",
"#FFF9C4",
"#FFE0B2",
"#D7CCC8"
];

const data = {
A:[
{name:"Apple",img:"../../assets/apple.webp"},
{name:"Arm",img:"../../assets/arm.webp"},
{name:"Ant",img:"../../assets/ant.webp"},
{name:"Aeroplane",img:"../../assets/aeroplane.webp"}
],
B:[
{name:"Ball",img:"../../assets/ball.webp"},
{name:"Banana",img:"../../assets/banana.webp"},
{name:"Bag",img:"../../assets/bag.webp"},
{name:"Book",img:"../../assets/book.webp"},
{name:"Bus",img:"../../assets/bus.webp"}
],
C:[
{name:"Cat",img:"../../assets/cat.webp"},
{name:"Car",img:"../../assets/car.webp"},
{name:"Cake",img:"../../assets/cake.webp"},
{name:"Cow",img:"../../assets/cow.webp"},
{name:"Cup",img:"../../assets/cup.webp"}
],
D:[
{name:"Dog",img:"../../assets/dog.webp"},
{name:"Duck",img:"../../assets/duck.webp"},
{name:"Drum",img:"../../assets/drum.webp"},
{name:"Door",img:"../../assets/door.webp"}
],
E:[
{name:"Egg",img:"../../assets/egg.webp"},
{name:"Elephant",img:"../../assets/elephant.webp"},
{name:"Eye",img:"../../assets/eye.webp"},
{name:"Ear",img:"../../assets/ear.webp"}
],
F:[
{name:"Fish",img:"../../assets/fish.webp"},
{name:"Fan",img:"../../assets/fan.webp"},    
{name:"Finger",img:"../../assets/finger.webp"},
{name:"Fox",img:"../../assets/fox.webp"},
{name:"Flag",img:"../../assets/flag.webp"}
],
G:[
{name:"Goat",img:"../../assets/goat.webp"},
{name:"Girl",img:"../../assets/girl.webp"},
{name:"Grapes",img:"../../assets/grapes.webp"},
{name:"Gift",img:"../../assets/gift.webp"},
{name:"Gun",img:"../../assets/gun.webp"}
],
H:[
{name:"Hat",img:"../../assets/hat.webp"},
{name:"Horse",img:"../../assets/horse.webp"},
{name:"Hen",img:"../../assets/hen.webp"},
{name:"Hand",img:"../../assets/hand.webp"},
{name:"House",img:"../../assets/house.webp"}
],
I:[
{name:"Ice cream",img:"../../assets/icecream.webp"},
{name:"Ink",img:"../../assets/ink.webp"},
{name:"Iron",img:"../../assets/iron.webp"},
{name:"Igloo",img:"../../assets/igloo.webp"}
],
J:[
{name:"Jug",img:"../../assets/jug.webp"},
{name:"Jam",img:"../../assets/jam.webp"},
{name:"Juice",img:"../../assets/juice.webp"},
{name:"Jar",img:"../../assets/jar.webp"},
{name:"Jeep",img:"../../assets/jar.webp"}
],
K:[
{name:"Kite",img:"../../assets/kite.webp"},
{name:"King",img:"../../assets/king.webp"},
{name:"Key",img:"../../assets/key.webp"},
{name:"Knife",img:"../../assets/knife.webp"}
],
L:[
{name:"Loin",img:"../../assets/loin.webp"},
{name:"Lamp",img:"../../assets/lamp.webp"},
{name:"Leaf",img:"../../assets/leaf.webp"},
{name:"Lock",img:"../../assets/lock.webp"}
],
M:[
{name:"Monkey",img:"../../assets/monkey.webp"},
{name:"Moon",img:"../../assets/moon.webp"},,
{name:"Mango",img:"../../assets/mango.webp"},
{name:"Milk",img:"../../assets/milk.webp"},
{name:"Mouse",img:"../../assets/mouse.webp"}
],
N:[
{name:"Nest",img:"../../assets/nest.webp"},
{name:"Net",img:"../../assets/net.webp"},
{name:"Nose",img:"../../assets/nose.webp"},
{name:"Nail",img:"../../assets/nail.webp"}
],
O:[
{name:"Orange",img:"../../assets/orange.webp"},
{name:"Owl",img:"../../assets/owl.webp"},
{name:"Ox",img:"../../assets/ox.webp"},
{name:"Oil",img:"../../assets/oil.webp"}
],
P:[
{name:"Parrot",img:"../../assets/parrot.webp"},
{name:"Pen",img:"../../assets/pen.webp"},
{name:"Penguin",img:"../../assets/penguin.webp"},
{name:"Pencil",img:"../../assets/pencil.webp"}
],
Q:[
{name:"Queen",img:"../../assets/queen.webp"},
{name:"Quail",img:"../../assets/quail.webp"},
{name:"Quilt",img:"../../assets/quilt.webp"},
{name:"Quack",img:"../../assets/quack.webp"}
],
R:[
{name:"Rabbit",img:"../../assets/rabbit.webp"},
{name:"Rat",img:"../../assets/rat.webp"},
{name:"Ring",img:"../../assets/ring.webp"},
{name:"Rose",img:"../../assets/rose.webp"}
],
S:[
{name:"Sun",img:"../../assets/sun.webp"},
{name:"School",img:"../../assets/school.webp"},
{name:"Star",img:"../../assets/star.webp"},
{name:"Snake",img:"../../assets/snake.webp"}
],
T:[
{name:"Tiger",img:"../../assets/tiger.webp"},
{name:"Train",img:"../../assets/train.webp"},
{name:"Truck",img:"../../assets/truck.webp"},
{name:"Table",img:"../../assets/table.webp"}
],
U:[
{name:"Umbrella",img:"../../assets/umbrella.webp"},
{name:"Uniform",img:"../../assets/uniform.webp"},
{name:"Unicorn",img:"../../assets/unicorn.webp"},
{name:"Uncle",img:"../../assets/uncle.webp"}
],
V:[
{name:"Van",img:"../../assets/van.webp"},
{name:"Vase",img:"../../assets/vase.webp"},
{name:"Violin",img:"../../assets/violin.webp"},
{name:"Village",img:"../../assets/village.webp"}
],
W:[
{name:"Watch",img:"../../assets/watch.webp"},
{name:"Water",img:"../../assets/water.webp"},
{name:"Whale",img:"../../assets/whale.webp"},
{name:"Wolf",img:"../../assets/wolf.webp"}
],
X:[
{name:"X-ray",img:"../../assets/xray.webp"},
{name:"Xylophone",img:"../../assets/xylophone.webp"},
{name:"X-box",img:"../../assets/xbox.webp"},
{name:"Xerus",img:"../../assets/xerus.webp"}
],
Y:[
{name:"Yak",img:"../../assets/yak.webp"},
{name:"Yarn",img:"../../assets/yarn.webp"},
{name:"Yacht",img:"../../assets/yacht.webp"},
{name:"Yellow",img:"../../assets/yellow.webp"}
],
Z:[
{name:"Zebra",img:"../../assets/zebra.webp"},
{name:"Zoo",img:"../../assets/zoo.webp"},
{name:"Zip",img:"../../assets/zip.webp"},
{name:"Zero",img:"../../assets/zero.webp"}
]
};

let currentLetter="";
let index=0;

// GRID
const letters = Object.keys(data);

letters.forEach((letter, index) => {

let card = document.createElement("div");
card.className = "card";
card.innerText = letter;
card.onclick = () => openPopup(letter);
card.style.background = colors[index % colors.length];

// special alignment for Y and Z
if(letter === "Y" || letter === "Z"){
card.style.gridColumn = "span 2";  // center effect
card.style.justifySelf = "center";
}

grid.appendChild(card);
});

// OPEN POPUP
function openPopup(letter){
currentLetter=letter;
index=0;
document.getElementById("popup").classList.remove("hidden");
showItem();
}

// SHOW ITEM
function showItem(){
let item=data[currentLetter][index];

document.getElementById("popup-header").innerText=currentLetter;
document.getElementById("popup-img").src=item.img;
document.getElementById("popup-text").innerText=item.name;

speak(currentLetter+" for "+item.name);
}

function nextItem(){
let letters = Object.keys(data);
let currentIndex = letters.indexOf(currentLetter);

if(currentIndex < letters.length - 1){
    currentLetter = letters[currentIndex + 1];
    index = 0;
    showItem();
}
}

function prevItem(){
let letters = Object.keys(data);
let currentIndex = letters.indexOf(currentLetter);

if(currentIndex > 0){
    currentLetter = letters[currentIndex - 1];
    index = 0;
    showItem();
}
}

// CLOSE
function closePopup(){
document.getElementById("popup").classList.add("hidden");
}

// OUTSIDE CLICK
function outsideClick(e){
if(e.target.id==="popup") closePopup();
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

// SPEAK
function speak(text){
speechSynthesis.cancel();

let msg = new SpeechSynthesisUtterance(text);

// Get all available voices
let voices = speechSynthesis.getVoices();

// Try to find female English voice
let femaleVoice = voices.find(v =>
    v.name.toLowerCase().includes("female") ||
    v.name.toLowerCase().includes("samantha") ||
    v.name.toLowerCase().includes("google uk english female") ||
    v.name.toLowerCase().includes("zira") ||
    v.name.toLowerCase().includes("aria") ||
    v.name.toLowerCase().includes("female")
);

// fallback: first English voice
if(!femaleVoice){
    femaleVoice = voices.find(v => v.lang.includes("en"));
}

// assign voice
if(femaleVoice){
    msg.voice = femaleVoice;
}

msg.lang = "en-US";
msg.rate = 0.9;
msg.pitch = 1.1;   // 👈 this makes it softer (more female-like)
msg.volume = 1;

speechSynthesis.speak(msg);
}

// repeat sound
function repeatSpeak(){
showItem();
}