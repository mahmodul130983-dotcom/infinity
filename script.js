// ===============================
// FOR SUMU ❤️
// Unlock Animation Script
// ===============================

const dragButton = document.getElementById("dragButton");
const slider = document.querySelector(".slider");
const transition = document.getElementById("transition");

let dragging = false;
let startX = 0;
let currentX = 0;

const maxMove =
slider.offsetWidth -
dragButton.offsetWidth -
12;

// ---------- Desktop ----------

dragButton.addEventListener("mousedown", (e)=>{

dragging = true;

startX = e.clientX;

});

// ---------- Mobile ----------

dragButton.addEventListener("touchstart",(e)=>{

dragging = true;

startX = e.touches[0].clientX;

});

// ---------- Move ----------

document.addEventListener("mousemove",(e)=>{

if(!dragging) return;

moveSlider(e.clientX);

});

document.addEventListener("touchmove",(e)=>{

if(!dragging) return;

moveSlider(e.touches[0].clientX);

});

// ---------- End ----------

document.addEventListener("mouseup",stopDrag);

document.addEventListener("touchend",stopDrag);

function moveSlider(x){

currentX = x-startX;

if(currentX<0)
currentX=0;

if(currentX>maxMove)
currentX=maxMove;

dragButton.style.left =
(currentX+6)+"px";

if(currentX>=maxMove-5){

unlock();

}

}

function stopDrag(){

if(!dragging)
return;

dragging=false;

if(currentX<maxMove-5){

dragButton.style.left="6px";

}

}

// ===============================
// Unlock
// ===============================

function unlock(){

dragging=false;

transition.style.display="flex";

document.querySelector(".loading").innerHTML="🌸";

let count=0;

const flowers=[

"🌸",

"🌼",

"🌷",

"🤍",

"💐",

"🌹",

"🌺"

];

const interval=setInterval(()=>{

document.querySelector(".loading").innerHTML=

flowers[count%flowers.length];

count++;

},300);

// Sound

const audio=new Audio(

"https://cdn.pixabay.com/download/audio/2022/03/15/audio_b1b4cf6b3d.mp3"

);

audio.volume=.5;

audio.play();

// Next Page

setTimeout(()=>{

clearInterval(interval);

window.location.href="garden.html";

},4500);

}

// ===============================
// Floating Hearts
// ===============================

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-30px";

heart.style.fontSize=

(18+Math.random()*25)+"px";

heart.style.pointerEvents="none";

heart.style.transition="6s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform=

"translateY(-120vh)";

heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},6500);

},500);

// ===============================
// Sparkles
// ===============================

setInterval(()=>{

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.opacity="0";

star.style.transition="1.5s";

document.body.appendChild(star);

setTimeout(()=>{

star.style.opacity="1";

},100);

setTimeout(()=>{

star.style.opacity="0";

},1200);

setTimeout(()=>{

star.remove();

},1700);

},300);
/*=========================================
PART 6.1C
Dynamic Lily Garden
=========================================*/

const garden = document.querySelector(".garden");

const lilyTypes = [

"lily-small",

"lily-medium",

"lily-large"

];

function createLily(){

const flower = document.createElement("img");

flower.src = "assets/img/lily.svg";

flower.classList.add("lily-svg");

flower.classList.add(

lilyTypes[

Math.floor(Math.random()*3)

]

);

flower.style.left =

Math.random()*100 + "%";

flower.style.bottom =

80 + Math.random()*120 + "px";

flower.style.animationDelay =

Math.random()*5 + "s";

flower.style.opacity =

0.8 + Math.random()*0.2;

flower.style.transform =

"rotate(" +

(-8 + Math.random()*16)

+

"deg)";

garden.appendChild(flower);

}

/* Create Initial Flowers */

for(let i=0;i<25;i++){

createLily();

}

/* New Lily Every Few Seconds */

setInterval(()=>{

createLily();

if(garden.children.length>55){

garden.removeChild(garden.children[0]);

}

},2500);

/* Fireflies */

function firefly(){

const light=document.createElement("div");

light.className="firefly";

light.style.left=

Math.random()*100+"vw";

light.style.top=

50+Math.random()*50+"vh";

document.body.appendChild(light);

setTimeout(()=>{

light.remove();

},8000);

}

setInterval(firefly,500);

/* Falling Petals */

function petal(){

const p=document.createElement("div");

p.className="petal";

p.innerHTML="🌸";

p.style.left=

Math.random()*100+"vw";

p.style.animationDuration=

6+Math.random()*6+"s";

document.body.appendChild(p);

setTimeout(()=>{

p.remove();

},12000);

}

setInterval(petal,700);

/* Floating Hearts */

function heart(){

const h=document.createElement("div");

h.className="big-heart";

h.innerHTML="💖";

h.style.left=

Math.random()*100+"vw";

h.style.bottom="-50px";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},6000);

}

setInterval(heart,2200);

/* Romantic Quotes */

const quotes=[

"Every Lily reminds me of you, Sumu.",

"Your smile is softer than any flower.",

"The garden blooms because you exist.",

"My favorite flower will always be you."

];

const quoteBox=document.querySelector(".quote");

if(quoteBox){

let index=0;

setInterval(()=>{

quoteBox.innerHTML=quotes[index];

index=(index+1)%quotes.length;

},5000);

}
