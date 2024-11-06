const container = document.querySelector(".container");
let gridSize = 50;
let paddingSize = 900 / gridSize / 2;

function createGrid() {
    for(let j = 0; j < gridSize; j++) {
        const divVertical = document.createElement("div");
        divVertical.classList.add("vertical");
        container.appendChild(divVertical)
        for(let i = 0; i < gridSize; i++) {
            const divHorizontal = document.createElement("div");
            divHorizontal.classList.add("horizontal");
            divVertical.appendChild(divHorizontal)
        }
    }
}

createGrid();
const divToBeChanged = document.querySelectorAll("div.horizontal");
divToBeChanged.forEach((square) => {
    square.style.padding = paddingSize + "px";
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "brown";
    })
})

const buttonGridSize = document.createElement("button");
buttonGridSize.textContent = "Start Again";
buttonGridSize.addEventListener("click", () => {
    gridSize = prompt("What grid size do you want?","64");
    paddingSize = 900 / gridSize / 2;
    const tbr = document.querySelectorAll("div");
    container.removeChild(tbr);
    createGrid();

})
container.appendChild(buttonGridSize)

