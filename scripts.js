const container = document.querySelector('.container');


function createColumn() {
    const squareDiv = document.createElement('div');
    for (let i = 0; i < 16; i++) {
        let square = document.createElement('div');
        square.id = 'square' + i;
        square.className = 'square';
        square.style.cssText = 'min-height: 25px; min-width: 25px;'
        square.style.border = '1px solid black';
        // Change color when mouse is hover/over square
        square.addEventListener("mouseenter", () => square.style.backgroundColor = 'aqua');
        square.addEventListener("mouseleave", () => square.style.backgroundColor = 'white');
        squareDiv.appendChild(square);
    }
    container.appendChild(squareDiv);
}

// Create Row
for (let i = 0; i < 16; i++) {
    createColumn();
}

