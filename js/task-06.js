const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
   if (event.currentTarget.value.length < event.currentTarget.dataset.length) {
      event.currentTarget.classList.add("invalid");
   } else {
      event.currentTarget.classList.contains("invalid")
         ? event.currentTarget.classList.replace("invalid", "valid")
         : event.currentTarget.classList.add("valid");
   }
});
