/* ================================
   SMOOTH SCROLL
================================ */

function scrollToSection(sectionId) {

    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });

}


/* ================================
   LOVE CARD FLIP
================================ */

function flipCard(card) {

    card.classList.toggle("flipped");

}


/* ================================
   SPECIAL BAR
================================ */

function fillSpecialBar() {

    const bar = document.getElementById("specialBar");
    const percent = document.getElementById("specialPercent");
    const result = document.getElementById("specialResult");
    const button = document.getElementById("specialButton");

    button.disabled = true;
    button.style.opacity = "0.6";

    let current = 0;

    const interval = setInterval(() => {

        current += 1;

        if (current <= 100) {
            bar.style.width = current + "%";
            percent.textContent = current + "%";
        }

        if (current >= 100) {

            clearInterval(interval);

            percent.textContent = "∞";

            result.innerHTML = `
                Yeah... I ran out of bar. 😂❤️
                <br>
                <small>
                    Turns out you're kind of difficult to measure.
                </small>
            `;

            button.textContent = "I think you get it now 😌";

        }

    }, 25);

}


/* ================================
   FINAL MESSAGE
================================ */

function revealMessage() {

    const message = document.getElementById("finalMessage");
    const button = document.getElementById("revealButton");

    message.classList.add("visible");

    button.textContent = "❤️";

    button.disabled = true;

}


/* ================================
   FLOATING HEARTS
================================ */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    heart.style.fontSize =
        (8 + Math.random() * 14) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}


/* Create a heart every few seconds */

setInterval(createHeart, 1200);