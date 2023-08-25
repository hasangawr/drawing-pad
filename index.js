const outerDiv = document.querySelector('.outer');
const button = document.querySelector('.btn');

let mouseDown = false;

const draw = function (event) {
    event.target.style.background = 'black';
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

            colDiv.addEventListener('mousedown', (event) => {
                if (mouseDown) {
                    mouseDown = false;   
                } else {
                    mouseDown = true;
                    draw(event);
                }
            });

            colDiv.addEventListener('mouseenter', (event) => {
                if(mouseDown) {
                    draw(event);
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

    button.addEventListener('click', () => {
        const gridSize = Number(prompt('Enter no. of squares per a side: '));
        if(gridSize > 0 && gridSize < 101) {
            mouseDown = false;
            createDrawingPad(gridSize);
        } else {
            alert('Grid size should be greater than 0 & not more than 100!');
        }
    });
}

main();