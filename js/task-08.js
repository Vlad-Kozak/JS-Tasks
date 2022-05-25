const form = document.querySelector(".login-form");

let userAccount = {};

form.addEventListener("submit", (event) => {
   event.preventDefault();

   const {
      elements: { email, password },
   } = event.currentTarget;

   if (email.value === "" || password.value === "") {
      return alert("Все поля должны быть заполнены!");
   }

   userAccount = { email: email.value, password: password.value };

   console.log(userAccount);

   event.currentTarget.reset();
});
