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
/*=========================================
 PART 6.2C
 Dynamic Rajanigandha Garden
=========================================*/

const rajanGarden = document.querySelector(".garden");

const rajanSizes = [
"rajan-small",
"rajan-medium",
"rajan-large"
];

function createRajanigandha(){

const flower = document.createElement("img");

flower.src = "assets/img/rajanigandha.svg";

flower.classList.add("rajanigandha-svg");

flower.classList.add(
rajanSizes[
Math.floor(Math.random()*rajanSizes.length)
]
);

flower.style.left =
Math.random()*100 + "%";

flower.style.bottom =
(70 + Math.random()*150) + "px";

flower.style.animationDelay =
(Math.random()*5).toFixed(2) + "s";

flower.style.opacity =
0.7 + Math.random()*0.3;

flower.style.transform =
"rotate(" + (-6 + Math.random()*12) + "deg)";

flower.style.zIndex =
1 + Math.floor(Math.random()*4);

rajanGarden.appendChild(flower);

}

/* Initial Flowers */

for(let i=0;i<18;i++){

createRajanigandha();

}

/* Keep Blooming */

setInterval(()=>{

createRajanigandha();

const flowers =
document.querySelectorAll(".rajanigandha-svg");

if(flowers.length>45){

flowers[0].remove();

}

},3500);

/* White Sparkles */

function createSparkle(){

const s=document.createElement("div");

s.innerHTML="✨";

s.style.position="fixed";

s.style.left=Math.random()*100+"vw";

s.style.top=
40+Math.random()*60+"vh";

s.style.fontSize=
(10+Math.random()*12)+"px";

s.style.opacity="0";

s.style.pointerEvents="none";

s.style.transition="2s";

document.body.appendChild(s);

setTimeout(()=>{

s.style.opacity="1";

s.style.transform=
"translateY(-40px)";

},50);

setTimeout(()=>{

s.remove();

},2000);

}
/* ==========================================
   PART 6.5C
   Romantic Proposal Animation
========================================== */

const shanto = document.querySelector(".shanto-character");
const sumu = document.querySelector(".sumu-character");
const proposalText = document.querySelector(".proposal-text h2");
const proposalPara = document.querySelector(".proposal-text p");
const loveGlow = document.querySelector(".love-glow");

let proposalDone = false;

/*==========================
  Shanto Walk
==========================*/

function walkToSumu(){

    if(proposalDone) return;

    let position = 14;

    const walk = setInterval(()=>{

        position += 0.12;

        shanto.style.left = position + "%";

        if(position >= 34){

            clearInterval(walk);

            proposalDone = true;

            startProposal();

        }

    },30);

}

setTimeout(walkToSumu,2500);

/*==========================
 Proposal Scene
==========================*/

function startProposal(){

    proposalText.innerHTML =
    "🌹 Sumu, Every Flower Blooms... But None Are As Beautiful As You 🌹";

    proposalPara.innerHTML =
    "Every Lily reminds me of your smile.<br>" +
    "Every Rajanigandha reminds me of your purity.<br><br>" +
    "If I could choose one place forever,<br>" +
    "I would choose a life beside you.";

    loveGlow.animate([

        {
            transform:"translate(-50%,-50%) scale(1)"
        },

        {
            transform:"translate(-50%,-50%) scale(1.3)"
        },

        {
            transform:"translate(-50%,-50%) scale(1)"
        }

    ],{

        duration:2500,

        iterations:Infinity

    });

    createFlowerExplosion();

    createHeartRain();

}

/*==========================
 Flower Explosion
==========================*/

function createFlowerExplosion(){

    for(let i=0;i<40;i++){

        const flower=document.createElement("img");

        flower.src=
        Math.random()>0.5
        ?"assets/img/lily.svg"
        :"assets/img/rajanigandha.svg";

        flower.style.position="fixed";

        flower.style.width=
        (30+Math.random()*50)+"px";

        flower.style.left="50%";

        flower.style.top="55%";

        flower.style.pointerEvents="none";

        flower.style.zIndex="999";

        document.body.appendChild(flower);

        const x=(-500+Math.random()*1000);

        const y=(-450+Math.random()*200);

        flower.animate([

            {

                transform:"translate(0,0) scale(.3)",

                opacity:0

            },

            {

                transform:
                `translate(${x}px,${y}px) rotate(${Math.random()*360}deg)`,

                opacity:1

            },

            {

                transform:
                `translate(${x}px,${y+180}px) rotate(${Math.random()*720}deg)`,

                opacity:0

            }

        ],{

            duration:5000,

            easing:"ease-out"

        });

        setTimeout(()=>flower.remove(),5000);

    }

}

/*==========================
 Heart Rain
==========================*/

function createHeartRain(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="-40px";

        heart.style.fontSize=
        (18+Math.random()*20)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="999";

        document.body.appendChild(heart);

        heart.animate([

            {

                transform:"translateY(0)",

                opacity:0

            },

            {

                opacity:1

            },

            {

                transform:"translateY(110vh)",

                opacity:0

            }

        ],{

            duration:7000

        });

        setTimeout(()=>heart.remove(),7000);

    },250);

}

/*==========================
 Sumu Blush Effect
==========================*/

setInterval(()=>{

    if(!proposalDone) return;

    sumu.animate([

        {

            transform:"translateY(0) scale(1)"

        },

        {

            transform:"translateY(-10px) scale(1.02)"

        },

        {

            transform:"translateY(0) scale(1)"

        }

    ],{

        duration:2200

    });

},2300);

/*==========================
 Ending Message
==========================*/

setTimeout(()=>{

    if(!proposalDone) return;

    proposalText.innerHTML =
    "💍 Will You Stay With Me Forever, Sumu? 💖";

},18000);

setInterval(createSparkle,900);

/* Moon Glow Effect */

setInterval(()=>{

const moon=document.querySelector(".moon");

if(!moon) return;

moon.style.filter=
"brightness("+
(1+Math.random()*0.
