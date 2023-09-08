const contnirs = document.querySelector(".contnirs");
const btn = document.querySelector(".btn");
const body = document.querySelector("body");

const maxBoxes = 8;

const gener = () => {
  contnirs.innerHTML = "";
  
  for (let i = 0; i < maxBoxes; i++) {
let refrejj = Math.floor(Math.random() * 0xffffff).toString(16);
    refrejj = `#${refrejj.padStart(6, "0")}`;

    let bocs = document.createElement("div");
    bocs.classList.add("bocs");
    bocs.innerHTML = `<div class="boc" style="background:${refrejj}"></div> <span class="colrr">${refrejj}</span>`;
    contnirs.appendChild(bocs);
  }
};

gener();

btn.addEventListener("click", gener);





const container = document.getElementById("container");

contnirs.addEventListener("click", (event) => {
  const clickedPalette = event.target.closest(".bocs");
  if (clickedPalette) {
    const backgroundColor = clickedPalette.querySelector(".boc").style.backgroundColor;
    body.style.backgroundColor = backgroundColor;
  }
});