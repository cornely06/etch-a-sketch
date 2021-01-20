const container = document.getElementById("container");
const resize = document.getElementById("resize");
const range = document.getElementById("myRange");
const colorButtons = document.querySelectorAll(".colorButton")
const picker = document.getElementById("color-picker");
const random = document.getElementById("random");
let number = range.value;
let pickerStyle = "black";
var color = "black";
var randomColor;
resize.innerText = `${range.value} x ${range.value}`;
range.oninput = function() {
    resize.innerText = `${this.value} x ${this.value}`;
}
function randomNum() {
    return Math.floor(Math.random() * 256);
}
function randomColorMaker() {
    randomColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
}
function createCell(cellSize) {
    const cell = document.createElement("div");
    cell.style.border = "1px solid grey";
    cell.style.borderRadius = "2px";
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    return cell;
}
function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            container.appendChild(createCell(container.clientWidth / gridSize));
        }
    }
    var cells = container.querySelectorAll("div");
    cells.forEach(cell => cell.addEventListener("mouseover", colorChoice, false));
}
clear.addEventListener("click", clearGrid, false);
function clearGrid() {
while(container.firstChild) {
        container.removeChild(container.lastChild);
    }
    createGrid(number);
}
function resetGrid() {
    while(container.firstChild) {
        container.removeChild(container.lastChild);
    }
    number = range.value;
    createGrid(number);
}
resize.addEventListener("click", resetGrid, false);
function changeStyle(style) {
    hoverStyle = style;
}
function changeColor(event) {
    switch(event.target.id) {
        case "rainbow":
            color = "rainbow";
            break;
        case "black":
            color = "black";
            break;
        case "eraser":
            color = "white";
            break;
        case "random":
            color = randomColor;
            break;
        case "color-picker":
            color = pickerStyle;
            break;
    }
}
function colorChoice() {
    switch (color) {
        case "rainbow":
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            break;
        case "black":
            this.style.backgroundColor = "black";
            break;
        case "eraser":
            this.style.backgroundColor = "white";
            break;
        case randomColor:
            this.style.backgroundColor = randomColor;
            break;
        case pickerStyle:
            this.style.backgroundColor = pickerStyle;
            break;
        default:
            this.style.backgroundColor = color;
            break;
    }
}
function userColorSelection(event) {
    color = event.target.value;
    pickerStyle = event.target.value;
}
random.addEventListener("click", randomColorMaker, false);
colorButtons.forEach(colorButton => colorButton.addEventListener("click", changeColor, false));
picker.addEventListener("change", userColorSelection, false);
picker.addEventListener("input", userColorSelection, false);
createGrid(16);