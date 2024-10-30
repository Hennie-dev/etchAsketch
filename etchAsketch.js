let numberchoice = 5;
const gridContainer = document.querySelector('.gridContainer');

const drawGrid = (numberchoice) => {

    for(let i = 1; i <= (numberchoice*numberchoice); i++){

        const newdiv = document.createElement('div');
        newdiv.classList.add('gridItem');
        newdiv.style.width = `${500/numberchoice}px`;
        newdiv.style.height = 'auto';
        gridContainer.appendChild(newdiv);
    }
}

drawGrid(numberchoice);