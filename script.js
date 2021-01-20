            const container = document.getElementById("container");
            const clear = document.getElementById("clear");
            const black = document.getElementById("black");
            const random = document.getElementById("random");
            const picker = document.getElementById("color-picker");
            const resize = document.getElementById("resize");
            const range = document.getElementById("myRange");
            let number = range.value;
            resize.innerText = `${range.value} x ${range.value}`;
            range.oninput = function() {
                resize.innerText = `${this.value} x ${this.value}`;
            }
            let hoverStyle = "black";
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
                cells.forEach(cell => cell.addEventListener("mouseover", () => cell.style.backgroundColor = hoverStyle));
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
            function randomColor() {
                return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
            }
            function randomNum() {
                return Math.floor(Math.random() * 256);
            }
            function userColorSelection(event) {
                hoverStyle = event.target.value;
            }
            black.addEventListener("click", () => changeStyle("black"), false);
            random.addEventListener("click", () => changeStyle(randomColor()), false);
            eraser.addEventListener("click", () => changeStyle("white"), false);
            picker.addEventListener("change", userColorSelection, false);
            picker.addEventListener("input", userColorSelection, false);
            createGrid(16);