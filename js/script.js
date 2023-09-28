
const container = document.querySelector('#container');
let squareSize = 32;
let color = 'black';

function resetFrame() {
    let allCells = document.querySelectorAll(".gamecell").forEach(cell => {
        cell.style.backgroundColor = "white";
    })
};


function colorGrid() {
    console.log("triggers colorGrid")
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

function createGrid(squareSize) {
    squareSize = squareSize || 16;
    let cellWidth = 40/squareSize + "rem";
    let cellHeight = 40/squareSize + "rem";
    const mainContainerDiv = document.getElementById("maincontainer");
    let divArray = [];
    for (let i = 1; i <= squareSize; i++) {
        divArray[i] = document.createElement("div");
        mainContainerDiv.appendChild(divArray[i]);
            for (let j = 1; j <= squareSize; j++) {
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

const resetBtn = document.createElement('button');

resetBtn.textContent = 'Reset Frame'
resetBtn.addEventListener('click', resetFrame);
menucontainer.appendChild(resetBtn);

function onLoad() {
    let gridPixels = document.querySelectorAll(".gamecell");
    gridPixels.forEach(gridPixel => gridPixel.addEventListener("click", colorGrid));
    };
