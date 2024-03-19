let container = document.querySelector(".container");
for (i = 0; i < 256; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener("mouseover", fillCell);
  container.appendChild(cell);
}

function fillCell() {
  this.classList.add("filled");
}
