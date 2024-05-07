const MAX_WIDTH = 1120;
const MAX_HEIGHT = 1120;
const INITIAL_GRID_SIZE = 16;

let width = MAX_WIDTH;
let height = MAX_HEIGHT;
let gridSize = INITIAL_GRID_SIZE;

const container = document.querySelector("#container");

const drawGrid = () => {
    for (let i = 0 ; i < gridSize ; i++) {
        const divColumn = document.createElement("div");
        divColumn.classList.add("divColumn");
        divColumn.setAttribute("id", `divColumn${i}`);

        for (let j = 0 ; j < gridSize ; j++) {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("squareDiv");
            squareDiv.setAttribute("id", `squareDiv${j}`);
            squareDiv.addEventListener("mouseover", () => {
                squareDiv.style.backgroundColor = "black";
            })
            divColumn.appendChild(squareDiv);
        }

        container.appendChild(divColumn);
    }   
}

drawGrid();

const button = document.querySelector("button");
let result = button.addEventListener("click", () => {
    let girdChoice = prompt("Type in grid side size", 10);
    if (girdChoice > 100 || girdChoice <= 0) {
        alert("Grid side must be between 1-100");
        return;
    }
    gridSize = girdChoice;
    container.replaceChildren();
    drawGrid();
})

