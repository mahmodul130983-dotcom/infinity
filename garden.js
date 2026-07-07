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
   PART 6.1
   Garden Initialization
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const garden = document.querySelector(".garden");

    if (!garden) return;

    /* ==========================
       Lily Garden
    ========================== */

    function createLily() {

        const flower = document.createElement("img");

        flower.src = "assets/img/lily.svg";

        flower.className = "lily-svg";

        flower.style.left = Math.random() * 100 + "%";
        flower.style.bottom = (60 + Math.random() * 120) + "px";

        const size = 70 + Math.random() * 70;

        flower.style.width = size + "px";

        flower.style.animationDelay =
            (Math.random() * 3).toFixed(2) + "s";

        garden.appendChild(flower);

    }

    for (let i = 0; i < 20; i++) {

        createLily();

    }

    setInterval(() => {

        createLily();

        const lilies =
            garden.querySelectorAll(".lily-svg");

        if (lilies.length > 40) {

            lilies[0].remove();

        }

    }, 2500);

    /* ==========================
       Rajanigandha Garden
    ========================== */

    function createRajanigandha() {

        const flower = document.createElement("img");

        flower.src = "assets/img/rajanigandha.svg";

        flower.className = "rajanigandha-svg";

        flower.style.left = Math.random() * 100 + "%";
        flower.style.bottom = (70 + Math.random() * 130) + "px";

        flower.style.width =
            (80 + Math.random() * 40) + "px";

        flower.style.animationDelay =
            (Math.random() * 4).toFixed(2) + "s";

        garden.appendChild(flower);

    }

    for (let i = 0; i < 15; i++) {

        createRajanigandha();

    }

    setInterval(() => {

        createRajanigandha();

        const flowers =
            garden.querySelectorAll(".rajanigandha-svg");

        if (flowers.length > 35) {

            flowers[0].remove();

        }

    }, 3000);

});
/* ==========================================
   PART 6.2
   Fireflies + Petals + Hearts + Quotes
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Fireflies
    ========================== */

    function createFirefly() {

        const light = document.createElement("div");

        light.className = "firefly";

        light.style.left = Math.random() * 100 + "vw";
        light.style.top = (40 + Math.random() * 60) + "vh";

        document.body.appendChild(light);

        setTimeout(() => {
            light.remove();
        }, 8000);

    }

    setInterval(createFirefly, 600);

    /* ==========================
       Falling Petals
    ========================== */

    function createPetal() {

        const petal = document.createElement("img");

        petal.src =
            Math.random() > 0.5
            ? "assets/img/lily.svg"
            : "assets/img/rajanigandha.svg";

        petal.className = "petal";

        petal.style.left = Math.random() * 100 + "vw";

        petal.style.width =
            (25 + Math.random() * 35) + "px";

        petal.style.animationDuration =
            (8 + Math.random() * 5) + "s";

        document.body.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 14000);

    }

    setInterval(createPetal, 450);

    /* ==========================
       Floating Hearts
    ========================== */

    function createHeart() {

        const heart = document.createElement("div");

        heart.className = "big-heart";

        heart.innerHTML = "💖";

        heart.style.left = Math.random() * 100 + "vw";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);

    }

    setInterval(createHeart, 1800);

    /* ==========================
       Romantic Quotes
    ========================== */

    const quotes = [

        "Every Lily reminds me of you, Sumu ❤️",

        "Your smile is more beautiful than thousands of flowers 🌸",

        "Every Rajanigandha carries your fragrance 🤍",

        "My favorite place will always be beside you 💖",

        "Every heartbeat whispers your name... Sumu."

    ];

    const quoteBox = document.querySelector(".quote");

    if (quoteBox) {

        let index = 0;

        quoteBox.innerHTML = quotes[0];

        setInterval(() => {

            index++;

            if (index >= quotes.length) {

                index = 0;

            }

            quoteBox.style.opacity = 0;

            setTimeout(() => {

                quoteBox.innerHTML = quotes[index];

                quoteBox.style.opacity = 1;

            }, 400);

        }, 5000);

    }

});
/* ==========================================
   PART 6.3
   Shanto + Sumu Character Animation
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const shanto = document.querySelector(".shanto-character");
    const sumu = document.querySelector(".sumu-character");
    const proposalTitle = document.querySelector(".proposal-text h2");
    const proposalPara = document.querySelector(".proposal-text p");

    if (!shanto || !sumu) return;

    let walked = false;

    function walkToSumu() {

        if (walked) return;

        walked = true;

        let left = 14;

        const walk = setInterval(() => {

            left += 0.08;

            shanto.style.left = left + "%";

            if (left >= 32) {

                clearInterval(walk);

                startProposal();

            }

        }, 30);

    }

    setTimeout(walkToSumu, 2500);

    function startProposal() {

        shanto.style.transform = "translateY(-8px)";
        sumu.style.transform = "translateY(-8px)";

        if (proposalTitle) {

            proposalTitle.innerHTML =
            "🌹 Every Flower Bows Before Your Beauty, Sumu 🌹";

        }

        if (proposalPara) {

            proposalPara.innerHTML =

            "Lily blooms with elegance.<br>" +

            "Rajanigandha spreads fragrance.<br>" +

            "But your smile is more beautiful than both.<br><br>" +

            "Every heartbeat of mine whispers only one name... ❤️ Sumu ❤️";

        }

        createFlowerExplosion();

    }

    function createFlowerExplosion() {

        for (let i = 0; i < 40; i++) {

            const flower = document.createElement("img");

            flower.src =

                Math.random() > 0.5 ?

                "assets/img/lily.svg"

                :

                "assets/img/rajanigandha.svg";

            flower.style.position = "fixed";
            flower.style.left = "50%";
            flower.style.top = "55%";

            flower.style.width =
                (30 + Math.random() * 40) + "px";

            flower.style.pointerEvents = "none";
            flower.style.zIndex = "999";

            document.body.appendChild(flower);

            const x =
                -500 + Math.random() * 1000;

            const y =
                -350 + Math.random() * 180;

            flower.animate([

                {

                    transform:
                    "translate(0,0) scale(.2)",

                    opacity:0

                },

                {

                    transform:
                    `translate(${x}px,${y}px) rotate(${Math.random()*360}deg)`,

                    opacity:1

                },

                {

                    transform:
                    `translate(${x}px,${y+150}px) rotate(${Math.random()*720}deg)`,

                    opacity:0

                }

            ],{

                duration:4500,

                easing:"ease-out"

            });

            setTimeout(()=>{

                flower.remove();

            },4500);

        }

    }

    /* Character Floating */

    setInterval(()=>{

        shanto.animate([

            {transform:"translateY(0)"},

            {transform:"translateY(-8px)"},

            {transform:"translateY(0)"}

        ],{

            duration:2600

        });

        sumu.animate([

            {transform:"translateY(0)"},

            {transform:"translateY(-10px)"},

            {transform:"translateY(0)"}

        ],{

            duration:2800

        });

    },3000);

});
/* ==========================================
   PART 6.4
   Premium Romantic Effects
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

const shanto=document.querySelector(".shanto-character");
const sumu=document.querySelector(".sumu-character");
const glow=document.querySelector(".love-glow");
const proposal=document.querySelector(".proposal-text");

if(!shanto || !sumu || !glow) return;

/*==========================
 Rose Floating
==========================*/

const rose=document.createElement("img");

rose.src="assets/img/rose.svg";

rose.className="proposal-rose";

shanto.appendChild(rose);

/*==========================
 Love Glow
==========================*/

setInterval(()=>{

glow.animate([

{
transform:"translate(-50%,-50%) scale(1)",
opacity:.45
},

{
transform:"translate(-50%,-50%) scale(1.4)",
opacity:1
},

{
transform:"translate(-50%,-50%) scale(1)",
opacity:.45
}

],{

duration:2200

});

},2200);

/*==========================
 Heart Beam
==========================*/

function createHeart(){

const h=document.createElement("div");

h.innerHTML="💖";

h.style.position="fixed";

h.style.left="50%";

h.style.top="55%";

h.style.fontSize=
(16+Math.random()*20)+"px";

h.style.pointerEvents="none";

h.style.zIndex="999";

document.body.appendChild(h);

const x=(-180+Math.random()*360);

const y=(-220+Math.random()*120);

h.animate([

{

transform:"translate(0,0) scale(.3)",

opacity:0

},

{

transform:`translate(${x}px,${y}px) scale(1.2)`,

opacity:1

},

{

transform:`translate(${x}px,${y-80}px)`,

opacity:0

}

],{

duration:3500

});

setTimeout(()=>{

h.remove();

},3500);

}

setInterval(createHeart,400);

/*==========================
 Sumu Smile
==========================*/

setInterval(()=>{

sumu.animate([

{

transform:"translateY(0)"

},

{

transform:"translateY(-8px) scale(1.02)"

},

{

transform:"translateY(0)"

}

],{

duration:2600

});

},2800);

/*==========================
 Shanto Float
==========================*/

setInterval(()=>{

shanto.animate([

{

transform:"translateY(0)"

},

{

transform:"translateY(-6px)"

},

{

transform:"translateY(0)"

}

],{

duration:2500

});

},2500);

/*==========================
 Romantic Text
==========================*/

if(proposal){

proposal.animate([

{

opacity:.6

},

{

opacity:1

},

{

opacity:.6

}

],{

duration:3000,

iterations:Infinity

});

}

});
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg"
     width="180"
     height="320"
     viewBox="0 0 180 320">

    <defs>

        <radialGradient id="petal"
                        cx="50%"
                        cy="40%"
                        r="70%">

            <stop offset="0%"
                  stop-color="#ffb3c7"/>

            <stop offset="100%"
                  stop-color="#d40045"/>

        </radialGradient>

        <linearGradient id="stem"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%">

            <stop offset="0%"
                  stop-color="#4caf50"/>

            <stop offset="100%"
                  stop-color="#1b5e20"/>

        </linearGradient>

    </defs>

    <!-- Stem -->

    <rect
        x="86"
        y="90"
        width="8"
        height="190"
        rx="4"
        fill="url(#stem)"/>

    <!-- Leaves -->

    <ellipse
        cx="62"
        cy="175"
        rx="28"
        ry="12"
        fill="#43a047"
        transform="rotate(-28 62 175)"/>

    <ellipse
        cx="118"
        cy="205"
        rx="28"
        ry="12"
        fill="#43a047"
        transform="rotate(28 118 205)"/>

    <!-- Rose -->

    <circle
        cx="90"
        cy="60"
        r="18"
        fill="url(#petal)"/>

    <ellipse
        cx="90"
        cy="35"
        rx="24"
        ry="18"
        fill="url(#petal)"/>

    <ellipse
        cx="70"
        cy="55"
        rx="20"
        ry="15"
        fill="url(#petal)"
        transform="rotate(-28 70 55)"/>

    <ellipse
        cx="110"
        cy="55"
        rx="20"
        ry="15"
        fill="url(#petal)"
        transform="rotate(28 110 55)"/>

    <ellipse
        cx="75"
        cy="78"
        rx="18"
        ry="14"
        fill="url(#petal)"
        transform="rotate(-18 75 78)"/>

    <ellipse
        cx="105"
        cy="78"
        rx="18"
        ry="14"
        fill="url(#petal)"
        transform="rotate(18 105 78)"/>

</svg>
/* ==========================================
   PART 6.5B
   Premium Proposal Effects
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

const shanto=document.querySelector(".shanto-character");
const sumu=document.querySelector(".sumu-character");
const scene=document.querySelector(".proposal-scene");
const glow=document.querySelector(".love-glow");

if(!shanto || !sumu || !scene) return;

/*==========================
 Camera Zoom
==========================*/

function cameraZoom(){

scene.animate([

{
transform:"scale(1)"
},

{
transform:"scale(1.05)"
},

{
transform:"scale(1.08)"
},

{
transform:"scale(1)"
}

],{

duration:5000,

easing:"ease-in-out"

});

}

setTimeout(cameraZoom,6500);

/*==========================
 Shanto Kneel
==========================*/

setTimeout(()=>{

shanto.animate([

{
transform:"translateY(0)"
},

{
transform:"translateY(12px) rotate(3deg)"
},

{
transform:"translateY(12px) rotate(3deg)"
}

],{

duration:1800,

fill:"forwards"

});

},8000);

/*==========================
 Sumu Blush
==========================*/

setInterval(()=>{

sumu.animate([

{
filter:"brightness(1)"
},

{
filter:"brightness(1.25)"
},

{
filter:"brightness(1)"
}

],{

duration:1800

});

},3500);

/*==========================
 Heart Aura
==========================*/

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";

heart.style.left=
(48+Math.random()*6)+"vw";

heart.style.top=
(45+Math.random()*10)+"vh";

heart.style.fontSize=
(18+Math.random()*18)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="9999";

document.body.appendChild(heart);

heart.animate([

{

transform:"translateY(0) scale(.4)",

opacity:0

},

{

opacity:1

},

{

transform:"translateY(-220px) scale(1.3)",

opacity:0

}

],{

duration:3500,

easing:"ease-out"

});

setTimeout(()=>{

heart.remove();

},3500);

},280);

/*==========================
 Glow Pulse
==========================*/

if(glow){

setInterval(()=>{

glow.animate([

{

opacity:.4,

transform:"translate(-50%,-50%) scale(1)"

},

{

opacity:1,

transform:"translate(-50%,-50%) scale(1.5)"

},

{

opacity:.4,

transform:"translate(-50%,-50%) scale(1)"

}

],{

duration:2400

});

},2400);

}

});
/* ==========================================
   PART 6.5C
   Ring + Final Proposal + Forever Scene
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

const shanto=document.querySelector(".shanto-character");
const sumu=document.querySelector(".sumu-character");
const proposal=document.querySelector(".proposal-text");

if(!shanto || !sumu || !proposal) return;

/*==========================
 Ring Animation
==========================*/

const ring=document.createElement("div");

ring.className="proposal-ring";

ring.innerHTML="💍";

shanto.appendChild(ring);

setTimeout(()=>{

ring.animate([

{
opacity:0,
transform:"translate(0,0) scale(.2)"
},

{
opacity:1,
transform:"translate(45px,-20px) scale(1.2)"
},

{
opacity:1,
transform:"translate(85px,-28px) scale(1)"
}

],{

duration:2500,
fill:"forwards"

});

},11000);

/*==========================
 Final Text
==========================*/

setTimeout(()=>{

proposal.innerHTML=`

<h1 style="font-size:45px;color:#ffd7ef;">

💖 Will You Stay With Me Forever? 💖

</h1>

<p style="font-size:22px;line-height:2;">

Every Lily reminds me of your beauty.<br>

Every Rajanigandha reminds me of your purity.<br>

Every Rose reminds me of my love for you.<br><br>

But none of them can ever become YOU.<br><br>

🌸 Sumu 🌸<br>

You are my favorite flower,

my favorite person,

and my favorite place.

</p>

`;

},14000);

/*==========================
 Endless Hearts
==========================*/

function foreverHeart(){

const h=document.createElement("div");

h.innerHTML="💖";

h.style.position="fixed";

h.style.left=Math.random()*100+"vw";

h.style.bottom="-50px";

h.style.fontSize=(20+Math.random()*30)+"px";

h.style.pointerEvents="none";

h.style.zIndex="99999";

document.body.appendChild(h);

h.animate([

{

transform:"translateY(0)",

opacity:0

},

{

opacity:1

},

{

transform:"translateY(-120vh)",

opacity:0

}

],{

duration:7000,

easing:"linear"

});

setTimeout(()=>{

h.remove();

},7000);

}

setInterval(foreverHeart,300);

/*==========================
 Flower Explosion
==========================*/

setTimeout(()=>{

for(let i=0;i<120;i++){

const img=document.createElement("img");

img.src=Math.random()>.5

?

"assets/img/lily.svg"

:

"assets/img/rajanigandha.svg";

img.style.position="fixed";

img.style.left="50%";

img.style.top="50%";

img.style.width=(25+Math.random()*45)+"px";

img.style.pointerEvents="none";

img.style.zIndex="9999";

document.body.appendChild(img);

const x=-700+Math.random()*1400;

const y=-500+Math.random()*900;

img.animate([

{

transform:"translate(0,0) scale(.2)",

opacity:0

},

{

opacity:1

},

{

transform:`translate(${x}px,${y}px)
rotate(${Math.random()*720}deg)`,

opacity:0

}

],{

duration:6000,

easing:"ease-out"

});

setTimeout(()=>{

img.remove();

},6000);

}

},14500);

/*==========================
 Ending Glow
==========================*/

setTimeout(()=>{

document.body.animate([

{

filter:"brightness(1)"

},

{

filter:"brightness(1.3)"

},

{

filter:"brightness(1)"

}

],{

duration:5000,

iterations:Infinity

});

},15000);

});
/* ==========================================
   PART 6.6
   Magical Night Garden
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

const garden=document.querySelector(".garden");

if(!garden) return;

/*==========================
 Moon Light Pulse
==========================*/

const moon=document.querySelector(".moon");

if(moon){

setInterval(()=>{

moon.animate([

{
transform:"scale(1)",
filter:"brightness(1)"
},

{
transform:"scale(1.08)",
filter:"brightness(1.35)"
},

{
transform:"scale(1)",
filter:"brightness(1)"
}

],{

duration:4500

});

},4500);

}

/*==========================
 Fireflies
==========================*/

function createFirefly(){

const fly=document.createElement("div");

fly.className="firefly";

fly.style.left=Math.random()*100+"vw";

fly.style.top=(25+Math.random()*70)+"vh";

garden.appendChild(fly);

fly.animate([

{

transform:"translate(0,0)",

opacity:0

},

{

opacity:1

},

{

transform:`translate(${Math.random()*200-100}px,-${100+Math.random()*120}px)`,

opacity:0

}

],{

duration:5000+Math.random()*3000,

easing:"ease-in-out"

});

setTimeout(()=>{

fly.remove();

},8000);

}

setInterval(createFirefly,250);

/*==========================
 Flower Bloom
==========================*/

function bloomFlower(){

const img=document.createElement("img");

img.src=Math.random()>0.5

?

"assets/img/lily.svg"

:

"assets/img/rajanigandha.svg";

img.className="magic-flower";

img.style.left=Math.random()*100+"vw";

img.style.bottom=(20+Math.random()*220)+"px";

img.style.width=(45+Math.random()*55)+"px";

garden.appendChild(img);

img.animate([

{

transform:"scale(.2)",

opacity:0

},

{

transform:"scale(1.15)",

opacity:1

},

{

transform:"scale(1)",

opacity:1

}

],{

duration:2500,

fill:"forwards"

});

}

for(let i=0;i<40;i++){

setTimeout(bloomFlower,i*120);

}

/*==========================
 Floating Sparkles
==========================*/

setInterval(()=>{

const s=document.createElement("div");

s.innerHTML="✨";

s.style.position="fixed";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.fontSize=(12+Math.random()*18)+"px";

s.style.pointerEvents="none";

document.body.appendChild(s);

s.animate([

{

opacity:0,

transform:"scale(.3)"

},

{

opacity:1,

transform:"scale(1.3)"

},

{

opacity:0,

transform:"scale(.4)"

}

],{

duration:1800

});

setTimeout(()=>{

s.remove();

},1800);

},180);

/*==========================
 Romantic Message
==========================*/

const messages=[

"Every Lily smiles because of you 🌸",

"Every Rajanigandha carries your fragrance 🤍",

"You are more beautiful than every flower ❤️",

"My heart blooms whenever I see you 🌹"

];

const title=document.querySelector(".proposal-text h2");

if(title){

let i=0;

setInterval(()=>{

title.innerHTML=messages[i];

i++;

if(i>=messages.length){

i=0;

}

},5000);

}

});
/* ==========================================
   PART 6.7
   Endless Flower Rain + Dream Effect
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

const container=document.getElementById("petal-container");

if(!container) return;

/*==========================
 Endless Flower Rain
==========================*/

function flowerRain(){

const flower=document.createElement("img");

const flowers=[

"assets/img/lily.svg",

"assets/img/rajanigandha.svg",

"assets/img/rose.svg"

];

flower.src=

flowers[Math.floor(Math.random()*flowers.length)];

flower.className="fallingFlower";

flower.style.left=Math.random()*100+"vw";

flower.style.width=

(25+Math.random()*55)+"px";

flower.style.animationDuration=

(8+Math.random()*8)+"s";

flower.style.animationDelay=

(Math.random()*2)+"s";

container.appendChild(flower);

setTimeout(()=>{

flower.remove();

},17000);

}

setInterval(flowerRain,180);

/*==========================
 Dream Particles
==========================*/

function dreamParticle(){

const p=document.createElement("div");

p.className="dream-particle";

p.innerHTML="✨";

p.style.left=Math.random()*100+"vw";

p.style.top=Math.random()*100+"vh";

p.style.fontSize=

(10+Math.random()*18)+"px";

document.body.appendChild(p);

p.animate([

{

opacity:0,

transform:"scale(.3)"

},

{

opacity:1,

transform:"scale(1.3)"

},

{

opacity:0,

transform:"translateY(-80px)"

}

],{

duration:2500

});

setTimeout(()=>{

p.remove();

},2500);

}

setInterval(dreamParticle,250);

/*==========================
 Bouquet Explosion
==========================*/

function bouquetExplosion(){

for(let i=0;i<80;i++){

const img=document.createElement("img");

img.src=

Math.random()>.
/* ==========================================
   PART 6.8
   Grand Finale
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

const ending=document.getElementById("cinematicEnding");
const endingFlowers=document.querySelector(".endingFlowers");
const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");

if(!ending || !endingFlowers) return;

/*==========================
 Music Button
==========================*/

if(musicBtn && music){

musicBtn.onclick=()=>{

if(music.paused){

music.play();

musicBtn.innerHTML="⏸";

}else{

music.pause();

musicBtn.innerHTML="🎵";

}

};

}

/*==========================
 Grand Finale
==========================*/

function grandFinale(){

ending.classList.add("show");

const flowers=[

"assets/img/lily.svg",

"assets/img/rajanigandha.svg",

"assets/img/rose.svg"

];

for(let i=0;i<180;i++){

const img=document.createElement("img");

img.src=flowers[Math.floor(Math.random()*flowers.length)];

img.style.position="absolute";

img.style.left=Math.random()*100+"%";

img.style.top=Math.random()*100+"%";

img.style.width=(20+Math.random()*55)+"px";

img.style.transform=

`rotate(${Math.random()*360}deg)`;

endingFlowers.appendChild(img);

img.animate([

{

opacity:0,

transform:"scale(.2)"

},

{

opacity:1,

transform:"scale(1.15)"

},

{

opacity:1,

transform:"scale(1)"

}

],{

duration:2500,

fill:"forwards"

});

}

}

/*==========================
 Golden Sparkles
==========================*/

function sparkle(){

const s=document.createElement("div");

s.innerHTML="✨";

s.className="goldSparkle";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

document.body.appendChild(s);

s.animate([

{

opacity:0,

transform:"scale(.2)"

},

{

opacity:1,

transform:"scale(1.4)"

},

{

opacity:0,

transform:"translateY(-120px)"

}

],{

duration:2200

});

setTimeout(()=>{

s.remove();

},2200);

}

setInterval(sparkle,200);

/*==========================
 Forever Hearts
==========================*/

function foreverHeart(){

const h=document.createElement("div");

h.innerHTML="❤️";

h.className="foreverHeart";

h.style.left=Math.random()*100+"vw";

document.body.appendChild(h);

h.animate([

{

transform:"translateY(0)",

opacity:0

},

{

opacity:1

},

{

transform:"translateY(-120vh)",

opacity:0

}

],{

duration:7000

});

setTimeout(()=>{

h.remove();

},7000);

}

setInterval(foreverHeart,350);

/*==========================
 Show Finale
==========================*/

setTimeout(grandFinale,30000);

});
