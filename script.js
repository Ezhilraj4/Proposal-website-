const scenes = [
  { text: "Nithya Sree ❤️", bg: "#120318" },
  { text: "Idhu oru normal website illa…", bg: "#1b0f2f" },
  { text: "Idhu ennoda unmaiuna feelings 😌", bg: "#240b36" },
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
  { text: "Just unmaiuna feelings 💖", bg: "#414345" },
  { text: "Ippo indha moment…", bg: "#141e30" },
  { text: "Oru simple question mattum…", bg: "#243b55" },
  { text: "En manasula irundhu ❤️", bg: "#000428" },
  { text: "Un decision enna?", bg: "#004e92" },

  // FINAL DECISION SCENE
  { decision: true, bg: "#000000" }
];

let index = 0;
const container = document.getElementById("scene-container");

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
        "https://ig.me/m/YOUR_BACKUP_INSTAGRAM";
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

function typeWriter(el, text) {
  let i = 0;
  el.innerHTML = "";
  const interval = setInterval(() => {
    el.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 40);
}

// Tap / Click → next scene
document.body.addEventListener("click", () => {
  if (index < scenes.length - 1) {
    index++;
    renderScene();
  }
});

renderScene();
