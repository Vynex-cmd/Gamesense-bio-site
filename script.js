const PASSWORD = "CHANGE_ME";

/* Loader /
window.onload = () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("login").classList.remove("hidden");
    }, 1500);
};

/ Login /
function login() {
    const input = document.getElementById("password").value;

    if (input === PASSWORD) {
        document.getElementById("login").classList.add("hidden");
        document.getElementById("profile").classList.remove("hidden");
    } else {
        alert("Wrong password");
    }
}

/ Copy crypto /
const wallets = {
    btc: "YOUR_BTC_ADDRESS",
    eth: "YOUR_ETH_ADDRESS",
    sol: "YOUR_SOL_ADDRESS",
    trx: "YOUR_TRX_ADDRESS",
    ltc: "YOUR_LTC_ADDRESS"
};

function copy(type) {
    navigator.clipboard.writeText(wallets[type]);
    alert(type.toUpperCase() + " copied!");
}

/ Music */
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");

function toggleMusic() {
    if (audio.paused) audio.play();
    else audio.pause();
}

audio.ontimeupdate = () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
};

progress.oninput = () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
};
