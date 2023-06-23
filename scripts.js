const container = document.querySelector('.container');

function createColumn() {
    const squareDiv = document.createElement('div');
    for (let i = 0; i < 16; i++) {
        var square = document.createElement('div');
        square.id = 'square' + i;
        square.className = 'square';
        square.style.cssText = 'height: 50px; width: 50px;'
        square.style.border = '1px solid black';
        squareDiv.appendChild(square);
    }
    container.appendChild(squareDiv);
}



for (let i = 0; i < 16; i++) {
    createColumn();
}

