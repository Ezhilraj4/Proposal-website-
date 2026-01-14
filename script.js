const scenes = [
  { text: "Nithya Sree ❤️" },
  { text: "Idhu oru special story…" },
  { text: "Intha feeling enakku romba precious 😌" },
  { text: "NCC Naval Wing ⚓" },
  { text: "Nee en junior-aa irundhaalum…" },
  { text: "Feelings-ku rank illa ❤️" },
  { text: "First meeting memory…" },
  { text: "Un siripu en manasula nikkudhu 💕" },
  { text: "Naa propose panninen honestly…" },
  { text: "Nee time venum nu sonna 🙂" },
  { text: "Adha naan respect panninen ❤️" },
  { text: "Waiting is love ⏳" },
  { text: "No pressure…" },
  { text: "Just true feelings 💖" },
  { text: "Ippo oru simple question…" },
  { text: "En manasula irundhu ❤️" },
  { text: "Un decision enna?" },
  { decision: true }
];

let index = 0;
const container = document.getElementById("scene-container");

function renderScene() {
  container.innerHTML = "";
  addFloatingStickers();

  const current = scenes[index];

  if (current.decision) {
    container.innerHTML += `
      <div class="scene-text">
        <p>What do you say? 💖</p>
        <div class="btn-group">
            <button id="yes">Yes ❤️</button>
            <button id="no">Need more time 🙂</button>
        </div>
        <p id="reply" style="margin-top:15px; font-size: 16px; font-style: italic;"></p>
      </div>
    `;

    document.getElementById("yes").onclick = (e) => {
      e.stopPropagation(); // Stops scene from advancing
      window.location.href = "https://ig.me/m/YOUR_INSTA_HERE";
    };

    document.getElementById("no").onclick = (e) => {
      e.stopPropagation();
      document.getElementById("reply").innerText = "Paravalla 🙂 Naa wait panna ready ❤️";
    };
  } else {
    const textDiv = document.createElement("div");
    textDiv.className = "scene-text";
    container.appendChild(textDiv);
    typeWriter(textDiv, current.text);
  }
}

function typeWriter(el, text) {
  let i = 0;
  const interval = setInterval(() => {
    el.innerHTML = text.slice(0, i) + '<span style="color: #ffb6c1;">|</span>';
    i++;
    if (i > text.length) {
      clearInterval(interval);
      el.innerHTML = text; // Remove cursor at end
    }
  }, 50);
}

function addFloatingStickers() {
  const emojis = ["🌸", "✨", "⚓", "🗼", "🎀", "💫"];
  for (let i = 0; i < 6; i++) {
    const span = document.createElement("span");
    span.className = "sticker";
    span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = Math.random() * 90 + "%";
    span.style.animationDelay = Math.random() * 5 + "s";
    span.style.fontSize = (20 + Math.random() * 20) + "px";
    container.appendChild(span);
  }
}

// TAP TO ADVANCE - Only if not on the decision scene
document.body.addEventListener("click", (e) => {
  if (index < scenes.length - 1 && e.target.tagName !== "BUTTON") {
    index++;
    renderScene();
  }
});

renderScene();
