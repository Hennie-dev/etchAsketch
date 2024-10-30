let numberchoice = 50;
const gridContainer = document.querySelector('.gridContainer');
const body = document;

let toggle = false;

body.addEventListener('mousedown', (e)=>{fillCurrent(e)});
body.addEventListener('mouseup', function(){toggle = false;});

//mousedown on element
const fillCurrent = (e) => {

    toggle = true;
    const target = e.target;
    console.log(target.classList[0]);
    if(target.classList[0]=="gridItem"){
        let randomR = (Math.random()*1000)%255;
        let randomG = (Math.random()*1000)%255;
        let randomB = (Math.random()*1000)%255;
        target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }

};

//Coloring in grid
const fillGrid = (e) => {
    const target = e.target;
    if(toggle){
        let randomR = (Math.random()*1000)%255;
        console.log(randomR);
        let randomG = (Math.random()*1000)%255;
        let randomB = (Math.random()*1000)%255;
        target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    };

};

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

drawGrid(numberchoice);