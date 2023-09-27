
const container = document.querySelector('#container');
const pixel = document.createElement('div');
let squareSize = 16;

function createDiv(size) {
    const pixel = document.createElement('div');
    pixel.classList.add('box');
    pixel.style.width = `${size}px`;
    pixel.style.height = `${size}px`;

    return div;
}

function resetFrame(pixels) {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    createGrid(squareSize);
    };

createGrid(16);



function createGrid(squareSize) {
for (let i = 1; i <= squareSize; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    for (let j = 1; j <= squareSize; j++) {
        const pixel = document.createElement('div');
        pixel.addEventListener("click", function handleMouseOver () {
            pixel.classList.add('hovered');
            });
        pixel.classList.add('pixel');
        column.appendChild(pixel);
    }
    container.appendChild(column);
}}



const resetBtn = document.createElement('button');

resetBtn.textContent = 'Reset Frame'
resetBtn.addEventListener('click', resetFrame);
controls.appendChild(resetBtn);