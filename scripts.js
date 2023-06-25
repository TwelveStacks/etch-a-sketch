const container = document.querySelector('.container');

function createColumn(value) {
    const squareDiv = document.createElement('div');
    for (let i = 0; i < value; i++) {
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

function createGrid(width, height) {
    for (let i = 0; i < width; i++) {
        createColumn(height);
    }
}

const button = document.querySelector('.button');

// Button to change size
function changeSize() {
    let size = prompt("Input a width and height")
    
}

// Slider
var slider = document.getElementById("sizeRange");
var output = document.getElementById("sliderValue");
output.textContent = slider.value + " x " + slider.value;

slider.oninput = function() {
    output.textContent = this.value + " x " + this.value;
    container.replaceChildren();
    createGrid(parseInt(this.value), parseInt(this.value));
    console.log(this.value);
}

createGrid(16, 16);