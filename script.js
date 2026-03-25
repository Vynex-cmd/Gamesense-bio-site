const PASSWORD = "CHANGE_ME";

/* LOGIN /
function login() {
    if (document.getElementById("password").value === PASSWORD) {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("profilePage").classList.add("active");
        type();
    } else showToast("Wrong password");
}

/ TYPING /
function type() {
    const name = "YourName";
    const sub = "Developer • Crypto • Creator";
    let i = 0;
    let el = document.getElementById("typedName");

    let t = setInterval(() => {
        if (i < name.length) {
            el.innerHTML += name[i];
            i++;
        } else clearInterval(t);
    }, 80);

    document.getElementById("subtitle").innerText = sub;
}

/ CURSOR /
document.addEventListener("mousemove", e => {
    const c = document.getElementById("cursor");
    c.style.top = e.clientY + "px";
    c.style.left = e.clientX + "px";
});

/ TOAST /
function showToast(text) {
    const t = document.getElementById("toast");
    t.innerText = text;
    t.style.display = "block";
    setTimeout(() => t.style.display = "none", 1500);
}

/ CRYPTO /
const wallets = {
    btc: "YOUR_BTC",
    eth: "YOUR_ETH",
    sol: "YOUR_SOL",
    trx: "YOUR_TRX",
    ltc: "YOUR_LTC"
};

function copy(type) {
    navigator.clipboard.writeText(wallets[type]);
    showToast(type.toUpperCase() + " copied");
}

/ MUSIC /
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");

function toggleMusic() {
    audio.paused ? audio.play() : audio.pause();
}

audio.ontimeupdate = () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
};

progress.oninput = () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
};

/ PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let p = Array.from({length:100}, () => ({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    dx: Math.random()-0.5,
    dy: Math.random()-0.5
}));

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    p.forEach(pt=>{
        pt.x+=pt.dx;
        pt.y+=pt.dy;
        ctx.fillStyle="#7CFC00";
        ctx.fillRect(pt.x,pt.y,2,2);
    });
    requestAnimationFrame(draw);
}
draw();