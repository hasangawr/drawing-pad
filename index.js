const container = document.querySelector('.container');

const createDrawingPad = function (size = 16, outerDiv = container, outerDivSize = 720) {

    for (let index = 0; index < size; index++) {

        const rowDiv = document.createElement('div');
        container.appendChild(rowDiv);

        rowDiv.style.setProperty('flex', '1 1 auto');
        rowDiv.style.setProperty('display', 'flex');
        rowDiv.style.setProperty('flex-direction', 'row');

        for (let index = 0; index < size; index++) {

            const colDiv = document.createElement('div');
            rowDiv.appendChild(colDiv);

            colDiv.style.setProperty('flex', '1 1 auto');
            colDiv.style.setProperty('border', '1px');
            colDiv.style.setProperty('border-style', 'solid');
            colDiv.style.setProperty('border-color', '#E5E4E2');
        }
    }

}

const main = function () {

    container.style.setProperty('display', 'flex');
    container.style.setProperty('flex-direction', 'column');

    createDrawingPad();

}

main();