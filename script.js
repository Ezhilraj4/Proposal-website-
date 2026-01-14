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
  const current = scenes[index];

  const textDiv = document.createElement("div");
  textDiv.className = "scene-text";

  if (current.decision) {
    textDiv.innerHTML = `
      <p>What do you say? 💖</p>
      <div class="btn-group">
          <button id="yes">Yes ❤️</button>
          <button id="no">Need more time 🙂</button>
      </div>
      <p id="reply" style="margin-top:20px; font-size: 18px; color: #ffb6c1;"></p>
    `;
    container.appendChild(textDiv);

    document.getElementById("yes").onclick = (e) => {
      e.stopPropagation();
      window.location.href = "https://ig.me/m/YOUR_INSTA";
    };

    document.getElementById("no").onclick = (e) => {
      e.stopPropagation();
      document.getElementById("reply").innerText = "Paravalla 🙂 Naa wait panna ready ❤️";
    };
  } else {
    container.appendChild(textDiv);
    typeWriter(textDiv, current.text);
  }
}

function typeWriter(el, text) {
  let i = 0;
  el.innerHTML = "";
  const p = document.createElement("p");
  el.appendChild(p);
  const interval = setInterval(() => {
    p.innerText = text.slice(0, i);
    i++;
    if (i > text.length) clearInterval(interval);
  }, 60);
}

document.body.addEventListener("click", (e) => {
  if (index < scenes.length - 1 && e.target.tagName !== "BUTTON") {
    index++;
    renderScene();
  }
});

renderScene();
