
const container = document.querySelector('#container');
const addColorButtons = document.querySelectorAll('.featurebutton');
const userColorPicker = document. querySelector('#input-color');
let color = 'black';

const resetBtn = document.createElement('button');
const rainbowBtn = document.createElement('button');

function resetFrame() {
    let allCells = document.querySelectorAll(".gamecell").forEach(cell => {
        cell.style.backgroundColor = "white";
    })
    let cellNumber = +prompt("How many squares per side? (Maximum: 100)");
    if (isNaN(cellNumber) || cellNumber <= 0 || cellNumber > 100) {
        alert("You must enter a positive integer (maximum: 100).")
        return;
    }
    const mainContainerDiv = document.getElementById("maincontainer");
    mainContainerDiv.innerHTML = '';
    createGrid(cellNumber);
}

function rainbowColor() {
    color = `hsl(${Math.random() * 360}, 100%, 50%)`
}

function colorGrid() {
    switch (color) {
        case 'rainbow':
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            this.classList.remove('opaque');
            break;
        case 'opaque':
            if (this.style.backgroundColor.match(/rgba/)) {
                let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
                if (currentOpacity <= 0.9) {
                    this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
                    this.classList.add('opaque');
                }
            } else if (this.classList == 'opaque' && this.style.backgroundColor == 'rgb(0, 0, 0)') {
                return;
            } else {
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
            }
            break;
        case 'eraser':
            this.style.backgroundColor = '#ffffff';
            this.classList.remove('opaque');
            break;
        case 'black':
            this.style.backgroundColor = '#000000';
            this.classList.remove('opaque');
            break;
        default:
            this.style.backgroundColor = color;
            this.classList.remove('opaque');
            break;
    }
}

function changeColor(event) {
    switch (event.target.dataset.color) {
        case 'rainbow':
            color = 'rainbow'
            break;
        case 'opaque':
            color = 'opaque';
            break
        case 'eraser':
            color = 'eraser';
            break;
        default:
            color = 'black';
            break;
    }
}

function createGrid(cellNumber) {
    cellNumber = cellNumber || 16;
    let cellWidth = 40/cellNumber + "rem";
    let cellHeight = 40/cellNumber + "rem";
    const mainContainerDiv = document.getElementById("maincontainer");
    let divArray = [];
    for (let i = 1; i <= cellNumber; i++) {
        divArray[i] = document.createElement("div");
        mainContainerDiv.appendChild(divArray[i]);
            for (let j = 1; j <= cellNumber; j++) {
            const newDiv = document.createElement('div');
            const classAttribute = document.createAttribute("class");
            classAttribute.value = "gamecell";
            newDiv.setAttributeNode(classAttribute);
            const widthHeightAttribute = document.createAttribute("style")
            widthHeightAttribute.value = `width: ${cellWidth}; height: ${cellHeight}`;
            newDiv.setAttributeNode(widthHeightAttribute);
        divArray[i].appendChild(newDiv);
        }
    }
onLoad();
}

createGrid(32);



resetBtn.textContent = 'Reset'
resetBtn.addEventListener('click', resetFrame);
menucontainer.appendChild(resetBtn);

rainbowBtn.textContent = 'Rainbow'
rainbowBtn.addEventListener('click', rainbowColor);
menucontainer.appendChild(rainbowBtn);


function onLoad() {
    let gridPixels = document.querySelectorAll(".gamecell");
    gridPixels.forEach(gridPixel => gridPixel.addEventListener("click", colorGrid));
    };
