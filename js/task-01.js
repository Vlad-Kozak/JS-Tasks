const items = document.querySelectorAll(".item");
const amountOfItems = items.length;

console.log(`Number of categories: ${amountOfItems}`);

items.forEach((item) => {
   console.log(`Category: ${item.firstElementChild.textContent}`);
   console.log(`Elements: ${item.querySelectorAll(`li`).length}`);
});
