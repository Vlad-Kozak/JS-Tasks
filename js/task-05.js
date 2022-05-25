const inputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
   console.dir(event.currentTarget);
   nameOutputEl.textContent = event.currentTarget.value;
   if (!event.currentTarget.value) {
      nameOutputEl.textContent = "Anonymous";
   }
});
