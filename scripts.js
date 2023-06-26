const container = document.querySelector('.container');
let currentColor = "#000000";
let currentMode = 'draw';

// Check if mouse is down to color pixels while holding mouse button
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Generates Grid
function createColumn(value) {
    const squareDiv = document.createElement('div');
    const squareSize = 500/value;
    for (let i = 0; i < value; i++) {
        let square = document.createElement('div');
        square.id = 'square' + i;
        square.className = 'square';
        square.style.cssText = `height: ${squareSize}px; width: ${squareSize}px;`;
        square.style.border = '1px solid gray';
        // Change color when mouse is hover/over square
        square.addEventListener("mousedown", colorSquare);
        square.addEventListener("mouseover", colorSquare);
        squareDiv.appendChild(square);
    }
    container.appendChild(squareDiv);
}

function createGrid(width, height) {
    for (let i = 0; i < width; i++) {
        createColumn(height);
    }
}

// Change size button 
const button = document.getElementById('changeSize');

button.addEventListener('click', () => {
    let size = parseInt(prompt("Input a number to increase grid size."));
    if (size <= 100) {
        container.replaceChildren();
        createGrid(parseInt(size), parseInt(size));
        output.textContent = size + ' x ' + size;
    }
    else {
        alert("Error. Max value is 100")
    }
})

// Color square
function colorSquare(e) {
    if (e.type === 'mouseover' && !mouseDown) {
        return
    }
    else{
        e.target.style.backgroundColor = currentColor;
    }
}

// Slider
var slider = document.getElementById("sizeRange");
var output = document.getElementById("sliderValue");
output.textContent = slider.value + " x " + slider.value;

slider.oninput = function() {
    output.textContent = this.value + " x " + this.value;
    container.replaceChildren();
    createGrid(parseInt(this.value), parseInt(this.value));
}

// Color Picker
var colorPicker = document.getElementById("colorPicker");

colorPicker.addEventListener('input', () => {
    currentColor = colorPicker.value;
})


// Clear grid
const clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', () => {
    container.replaceChildren();
    createGrid(parseInt(slider.value), parseInt(slider.value));
    console.log(slider.value)
});

// Eraser button
const eraserButton = document.getElementById('eraser');

eraserButton.addEventListener('click', () => {
    if (currentMode == 'draw') {
        currentColor = "#FFFFFF";
        currentMode = 'eraser';
        eraserButton.style.borderColor = 'red';
        eraserButton.style.color = 'red';
    }
    else if (currentMode == 'eraser') {
        currentColor = colorPicker.value;
        eraserButton.style.borderColor = 'green';
        eraserButton.style.color = 'black';
        currentMode = 'draw';
    }
})

createGrid(16, 16);