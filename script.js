// ------------------- SCENES DATA -------------------
const scenes = [
  { text: "Nithya Sree ❤️", bg: "#120318" },
  { text: "Idhu oru normal website illa…", bg: "#1b0f2f" },
  { text: "Idhu ennoda unmai feelings 😌", bg: "#240b36" },
  { text: "NCC Naval Wing ⚓", bg: "#001f3f" },
  { text: "Nee en junior-aa irundhaalum…", bg: "#0a2540" },
  { text: "Feelings-ku rank illa ❤️", bg: "#1a2a6c" },
  { text: "First meeting memory…", bg: "#3a1c71" },
  { text: "Un siripu en manasula nikkudhu 💕", bg: "#41295a" },
  { text: "Naa dhairiyamaa propose panninen…", bg: "#1d2671" },
  { text: "Nee time venum nu sonna 🙂", bg: "#283048" },
  { text: "Adha naa respect panninen ❤️", bg: "#16222a" },
  { text: "Waiting weakness illa…", bg: "#355c7d" },
  { text: "Adhu care ⏳", bg: "#6c5b7b" },
  { text: "No pressure…", bg: "#2c3e50" },
  { text: "No forcing…", bg: "#232526" },
  { text: "Just unmai feelings 💖", bg: "#414345" },
  { text: "Ippo indha moment…", bg: "#141e30" },
  { text: "Oru simple question mattum…", bg: "#243b55" },
  { text: "En manasula irundhu ❤️", bg: "#000428" },
  { text: "Un decision enna?", bg: "#004e92" },

  // FINAL DECISION SCENE
  { decision: true, bg: "#000000" }
];

// ------------------- GLOBAL VARIABLES -------------------
let index = 0;
const container = document.getElementById("scene-container");

// ------------------- RENDER SCENE FUNCTION -------------------
function renderScene() {
  container.innerHTML = "";
  container.style.background = scenes[index].bg;

  if (scenes[index].decision) {
    container.innerHTML = `
      <div class="scene-text">
        <p>What do you say? 💖</p>
        <button id="yes">Yes ❤️</button>
        <button id="no">Need more time 🙂</button>
        <p id="reply"></p>
      </div>
    `;

    document.getElementById("yes").onclick = () => {
      window.location.href =
        "https://ig.me/m/YOUR_BACKUP_INSTAGRAM"; // Replace with your Insta backup account
    };

    document.getElementById("no").onclick = () => {
      document.getElementById("reply").innerText =
        "Paravalla 🙂 Naa wait panna ready ❤️";
    };
  } else {
    const textDiv = document.createElement("div");
    textDiv.className = "scene-text";
    typeWriter(textDiv, scenes[index].text);
    container.appendChild(textDiv);
  }
}

// ------------------- TYPEWRITER EFFECT -------------------
function typeWriter(el, text) {
  let i = 0;
  el.innerHTML = "";
  const interval = setInterval(() => {
    el.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 40);
}

// ------------------- TAP NAVIGATION -------------------
document.body.addEventListener("click", () => {
  if (index < scenes.length - 1) {
    index++;
    renderScene();
  }
});
// Add stickers container
const stickersContainer = document.createElement("div");
stickersContainer.className = "stickers";

// List of emoji stickers
const emojis = ["💖","✨","🌸","🌟","🎀","💐"];
for(let i=0; i<8; i++){
  const span = document.createElement("span");
  span.className = "sticker";
  span.innerText = emojis[Math.floor(Math.random()*emojis.length)];
  // Random position
  span.style.top = Math.random()*70 + "%";
  span.style.left = Math.random()*70 + "%";
  stickersContainer.appendChild(span);
}

// Append stickers to container
container.appendChild(stickersContainer);

// ------------------- HEART PARTICLE ANIMATION -------------------
const canvas = document.getElementById("effects");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function createHeart() {
  hearts.push({
    x: Math.random() * canvas.width,
    y: canvas.height + 20,
    size: Math.random() * 10 + 10,
    speed: Math.random() * 1 + 0.5
  });
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((h, i) => {
    ctx.fillStyle = "rgba(255,105,180,0.8)";
    ctx.beginPath();
    ctx.arc(h.x, h.y, h.size, 0, Math.PI * 2);
    ctx.fill();
    h.y -= h.speed;
    if (h.y < -20) hearts.splice(i, 1);
  });
}

setInterval(createHeart, 300);

function animate() {
  drawHearts();
  requestAnimationFrame(animate);
}

animate();

// ------------------- INITIAL SCENE -------------------
renderScene();
