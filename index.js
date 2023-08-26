const outerDiv = document.querySelector('.outer');
const buttonGrid = document.querySelector('#grid');
const buttonBlack = document.querySelector('#black');
const buttonRandom = document.querySelector('#random');
const buttonClear = document.querySelector('#clear');

let gridSize = 16;
let mouseDown = false;
let drawingColor = 'black';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
  
const drawBlack = function (event) {
    let mouseInteractions = event.target.getAttribute('data-mouseInteractions');
    mouseInteractions++;
    event.target.setAttribute('data-mouseInteractions', mouseInteractions);
    let blackIntensity = 100 - ((mouseInteractions - 1) * 10);
    event.target.style.background = `rgb(${blackIntensity}, ${blackIntensity}, ${blackIntensity})`;
}

const drawRandomColors = function (event) {
    const red = getRandomInt(0, 256);
    const green = getRandomInt(0, 256);
    const blue = getRandomInt(0, 256);
    event.target.style.background = `rgb(${red}, ${green}, ${blue})`;
}

const createDrawingPad = function (size = 16) {

    outerDiv.replaceChildren();

    for (let index = 0; index < size; index++) {

        let rowDiv = document.createElement('div');
        outerDiv.appendChild(rowDiv);

        rowDiv.style.setProperty('flex', '1 1 auto');
        rowDiv.style.setProperty('display', 'flex');
        rowDiv.style.setProperty('flex-direction', 'row');

        for (let index = 0; index < size; index++) {

            let colDiv = document.createElement('div');
            rowDiv.appendChild(colDiv);

            colDiv.style.setProperty('flex', '1 1 auto');
            colDiv.setAttribute('data-mouseInteractions', 0);

            colDiv.addEventListener('mousedown', (event) => {
                if (mouseDown) {
                    mouseDown = false;   
                } else {
                    mouseDown = true;
                    if(drawingColor === 'black') {
                        drawBlack(event);
                    } else {
                        drawRandomColors(event);
                    }
                }
            });

            colDiv.addEventListener('mouseenter', (event) => {
                if(mouseDown) {
                    if(drawingColor === 'black') {
                        drawBlack(event);
                    } else {
                        drawRandomColors(event);
                    }
                }
            })
            
        }
    }

}

const main = function () {

    outerDiv.style.setProperty('display', 'flex');
    outerDiv.style.setProperty('flex', '0 0 auto');
    outerDiv.style.setProperty('flex-direction', 'column');

    createDrawingPad();

    buttonBlack.addEventListener('click', () => {
        drawingColor = 'black';
    });

    buttonRandom.addEventListener('click', () => {
        drawingColor = 'random';
    });

    buttonClear.addEventListener('click', () => {
        mouseDown = false;
        createDrawingPad(gridSize);
    });

    buttonGrid.addEventListener('click', () => {
        gridSize = Number(prompt('Enter no. of squares per a side: '));
        if(gridSize > 0 && gridSize < 101) {
            mouseDown = false;
            createDrawingPad(gridSize);
        } else {
            alert('Grid size should be greater than 0 & not more than 100!');
        }
    });
}

main();