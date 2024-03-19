let container = document.querySelector(".container");
for (i = 0; i < 256; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  container.appendChild(cell);
}
