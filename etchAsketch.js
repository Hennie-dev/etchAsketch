let numberchoice = 16;
const gridContainer = document.querySelector('.gridContainer');
const rangeInput = document.querySelector('#rangeInput');
rangeInput.value = 16;
const body = document;
const resetButton = document.querySelector('#reset');
let toggle = false;


//reset grid
const resetMyGrid = () => {
    const allItems = document.querySelectorAll('.gridItem');
    allItems.forEach(item => gridContainer.removeChild(item));
    drawGrid(rangeInput.value);

}

//change grid on input set
const redrawGrid = (e) => {
    const target = e.target;
    if(target.value <= 100){
        const allItems = document.querySelectorAll('.gridItem');
        allItems.forEach(item => gridContainer.removeChild(item));
        drawGrid(target.value);
    }
}

//mousedown on element
const fillCurrent = (e) => {
    e.preventDefault();
    rangeInput.blur();
    toggle = true;
    const target = e.target;
    target.draggable = false;
    console.log(target.classList[0]);
    if(target.classList[0]=="gridItem"){
        let randomR = (Math.random()*1000)%255;
        let randomG = (Math.random()*1000)%255;
        let randomB = (Math.random()*1000)%255;
        target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if(target.id == "rangeInput"){
        target.value = '';
        target.focus();
    }

}

//Coloring in grid
const fillGrid = (e) => {
    e.preventDefault();
    const target = e.target;
    target.draggable = false;
    if(toggle){
        let randomR = (Math.random()*1000)%255;
        let randomG = (Math.random()*1000)%255;
        let randomB = (Math.random()*1000)%255;
        target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    };

}

//Draw the grid
const drawGrid = (numberchoice) => {

    for(let i = 1; i <= (numberchoice*numberchoice); i++){

        const newdiv = document.createElement('div');
        newdiv.classList.add('gridItem');
        newdiv.style.width = `${500/numberchoice}px`;
        newdiv.style.height = `${500/numberchoice}px`;
        newdiv.draggable = false;
        newdiv.addEventListener('mouseenter',(e)=>{fillGrid(e)});
        gridContainer.appendChild(newdiv);
    }
}

body.addEventListener('mousedown', (e)=>{fillCurrent(e)});
body.addEventListener('mouseup', function(){toggle = false;});
rangeInput.addEventListener('change', (e) => redrawGrid(e));
resetButton.addEventListener('click', resetMyGrid);

drawGrid(numberchoice);