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
