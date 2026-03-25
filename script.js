const PASSWORD = "CHANGE_ME";

/* LOGIN /
function login() {
    const input = document.getElementById("password").value;

    if (input === PASSWORD) {
        const loginPage = document.getElementById("loginPage");
        const profilePage = document.getElementById("profilePage");

        loginPage.style.opacity = "0";

        setTimeout(() => {
            loginPage.style.display = "none";
            profilePage.classList.add("active");
            typeName();
        }, 400);

    } else {
        alert("Wrong password");
    }
}

/ TYPING /
const nameText = "YourName";
let i = 0;

function typeName() {
    const el = document.getElementById("typedName");
    el.innerHTML = "";

    let interval = setInterval(() => {
        if (i < nameText.length) {
            el.innerHTML += nameText.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 80);
}

/ CRYPTO /
const wallets = {
    btc: "YOUR_BTC_ADDRESS",
    eth: "YOUR_ETH_ADDRESS",
    sol: "YOUR_SOL_ADDRESS",
    trx: "YOUR_TRX_ADDRESS",
    ltc: "YOUR_LTC_ADDRESS"
};

function copy(type) {
    navigator.clipboard.writeText(wallets[type]);
}

/ MUSIC /
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
let playing = false;

function toggleMusic() {
    if (playing) audio.pause();
    else audio.play();
    playing = !playing;
}

audio.ontimeupdate = () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
};

progress.oninput = () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
};

/ ENTER LOGIN /
document.addEventListener("keydown", e => {
    if (e.key === "Enter") login();
});

/ PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speedX: Math.random() - 0.5,
        speedY: Math.random() - 0.5
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.fillStyle = "#7CFC00";
        ctx.fillRect(p.x, p.y, p.size, p.size);
    });

    requestAnimationFrame(animate);
}

animate();