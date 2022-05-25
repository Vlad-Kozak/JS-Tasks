const changeColorBtn = document.querySelector(".change-color");
const currentColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", (event) => {
   currentColor.textContent = getRandomHexColor();
   document.body.style.backgroundColor = currentColor.textContent;
});

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
