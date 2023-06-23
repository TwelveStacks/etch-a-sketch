const container = document.querySelector('.container');

function createRow() {
    for (let i = 0; i < 16; i++) {
        var square = document.createElement('div');
        square.id = 'square' + i;
        square.className = 'square';
        square.style.cssText = 'height: 50px; width: 50px;'
        square.style.border = '1px solid black';
        container.appendChild(square)
    }
}



// for (let i = 0; i < 16; i++) {
//     createRow();
// 

createRow();

