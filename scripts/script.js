let container = document.querySelector(".container");
let buttons = document.querySelector(".buttons");
init();

function init() {
  for (i = 0; i < 256; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = "40px";
    cell.style.height = "40px";
    cell.addEventListener("mouseenter", fillCell);
    container.appendChild(cell);
  }

  let adjustSize = document.createElement("button");
  adjustSize.textContent = "Custom grid";
  adjustSize.addEventListener("click", customGrid);
  buttons.appendChild(adjustSize);

  let defaultColor = document.createElement("button");
  defaultColor.textContent = "Default";
  defaultColor.addEventListener("click", defaultCellColor);
  buttons.appendChild(defaultColor);

  let rgb = document.createElement("button");
  rgb.textContent = "Random Color";
  rgb.addEventListener("click", rgbCell);
  buttons.appendChild(rgb);

  let erase = document.createElement("button");
  erase.textContent = "Eraser";
  erase.addEventListener("click", eraseCells);
  buttons.appendChild(erase);
}

function fillCell() {
  this.style.backgroundColor = "rgb(67, 67, 67)";
}

function defaultCellColor() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => cell.removeEventListener("mouseenter", randomRGB));
  cells.forEach((cell) => cell.removeEventListener("mouseenter", eraser));
  cells.forEach((cell) => cell.addEventListener("mouseenter", fillCell));
}

function rgbCell() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => cell.removeEventListener("mouseenter", fillCell));
  cells.forEach((cell) => cell.removeEventListener("mouseenter", eraser));
  cells.forEach((cell) => cell.addEventListener("mouseenter", randomRGB));
}

function randomRGB() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function eraseCells() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => cell.removeEventListener("mouseenter", fillCell));
  cells.forEach((cell) => cell.removeEventListener("mouseenter", randomRGB));
  cells.forEach((cell) => cell.addEventListener("mouseenter", eraser));
}

function eraser() {
  this.style.backgroundColor = "white";
}

function customGrid() {
  let size = prompt("Enter a number between 1-100", 16);
  while (+size > 100 || +size < 1 || isNaN(size)) {
    size = Number(prompt("Enter a number between 1-100"));
  }
  clearContainer();

  for (i = 0; i < size ** 2; i++) {
    let cell = document.createElement("div");
    cell.classList.toggle("cell");
    cell.style.width = 640 / size + "px";
    cell.style.height = 640 / size + "px";
    cell.addEventListener("mouseenter", fillCell);
    container.appendChild(cell);
  }
}

function clearContainer() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}
