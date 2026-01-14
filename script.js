// ------------------- SCENES DATA -------------------
const scenes = [
  { text: "Nithya Sree ❤️", bg: "#fbeef8" },
  { text: "Idhu oru special story…", bg: "#ffe7f0" },
  { text: "Intha feeling enakku romba precious 😌", bg: "#f7d9eb" },
  { text: "NCC Naval Wing ⚓", bg: "#e8d4f0" },
  { text: "Nee en junior-aa irundhaalum…", bg: "#f9e2f4" },
  { text: "Feelings-ku rank illa ❤️", bg: "#fceaf6" },
  { text: "First meeting memory…", bg: "#edccee" },
  { text: "Un siripu en manasula nikkudhu 💕", bg: "#f9dff3" },
  { text: "Naa propose panninen honestly…", bg: "#fae4f7" },
  { text: "Nee time venum nu sonna 🙂", bg: "#fbe7f9" },
  { text: "Adha naan respect panninen ❤️", bg: "#fadff6" },
  { text: "Waiting is love ⏳", bg: "#fce8fa" },
  { text: "No pressure…", bg: "#faeffb" },
  { text: "Just true feelings 💖", bg: "#f7d9f4" },
  { text: "Ippo oru simple question…", bg: "#fce8fb" },
  { text: "En manasula irundhu ❤️", bg: "#fdf0fc" },
  { text: "Un decision enna?", bg: "#fae9fc" },

  // FINAL DECISION SCENE
  { decision: true, bg: "#ffeefa" }
];

// ------------------- GLOBAL VARIABLES -------------------
let index = 0;
const container = document.getElementById("scene-container");

// ------------------- RENDER SCENE -------------------
function renderScene() {
  container.innerHTML = "";
  container.style.background = scenes[index].bg;

  // floating stickers
  addFloatingStickers();

  if (scenes[index].decision) {
    container.innerHTML += `
      <div class="scene-text">
        <p>What do you say? 💖</p>
        <button id="yes">Yes ❤️</button>
        <button id="no">Need more time 🙂</button>
        <p id="reply"></p>
      </div>
    `;

    document.getElementById("yes").onclick = () => {
      window.location.href = "https://ig.me/m/YOUR_BACKUP_INSTAGRAM";
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

// ------------------- FLOATING STICKERS -------------------
function addFloatingStickers() {
  const stickersContainer = document.createElement("div");
  stickersContainer.className = "stickers";
  container.appendChild(stickersContainer);

  const emojis = ["🌸","✨","🎀","💫","💐","⭐"];
  for (let i = 0; i < 8; i++) {
    const span = document.createElement("span");
    span.className = "sticker";
    span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.top = Math.random() * 85 + "%";
    span.style.left = Math.random() * 85 + "%";
    stickersContainer.appendChild(span);
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

// ------------------- TAP TO ADVANCE -------------------
document.body.addEventListener("click", () => {
  if (index < scenes.length - 1) {
    index++;
    renderScene();
  }
});

// INITIAL SHOW
renderScene();
