const body = document.querySelector("body");
const container = document.querySelector(".container");
let gridSize = 64;
let paddingSize = 900 / gridSize / 2;

function createGrid() {
    for (let j = 0; j < gridSize; j++) {
        const divVertical = document.createElement("div");
        container.appendChild(divVertical);
        for (let i = 0; i < gridSize; i++) {
            const divHorizontal = document.createElement("div");
            divHorizontal.classList.add("horizontal");
            divHorizontal.style.padding = paddingSize + "px";
            divHorizontal.addEventListener("mouseenter", () => {
                divHorizontal.style.backgroundColor = "brown";
            });
            divVertical.appendChild(divHorizontal);
        }
    }
}

function removeGrid() {
    Array.from(container.children).forEach((child) => {
        container.removeChild(child);
    });
}

createGrid();

const buttonGridSize = document.createElement("button");
buttonGridSize.textContent = "Start Again";
buttonGridSize.addEventListener("click", () => {
    gridSize = prompt("What grid size do you want?", "64");
    paddingSize = 900 / gridSize / 2;
    removeGrid();
    createGrid();
});

body.appendChild(buttonGridSize);
