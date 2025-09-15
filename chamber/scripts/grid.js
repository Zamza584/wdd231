const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const grid = document.querySelector("#member-cards");

gridButton.addEventListener("click", () => {
  grid.classList.add("grid");
  grid.classList.remove("list");
});

listButton.addEventListener("click", () => {
  grid.classList.add("list");
  grid.classList.remove("grid");
});
