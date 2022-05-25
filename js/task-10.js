const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
   createBoxes(inputEl.value);
   inputEl.value = "";
});

destroyBtn.addEventListener("click", () => {
   destroyBoxes();
});

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
   const boxes = [];
   for (let i = 0; i < amount; i += 1) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
   }
   boxesEl.append(...boxes);
}

function destroyBoxes() {
   boxesEl.innerHTML = "";
}
