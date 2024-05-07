const container = document.querySelector("#container");

for (let i = 0 ; i < 16 ; i++) {
    const divColumn = document.createElement("div");
    divColumn.classList.add("divColumn");
    divColumn.setAttribute("id", `divColumn${i}`);

    for (let j = 0 ; j < 16 ; j++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv");
        squareDiv.setAttribute("id", `squareDiv${j}`);
        divColumn.appendChild(squareDiv);
    }
    
    container.appendChild(divColumn);
}