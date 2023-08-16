let container = document.querySelector('#container');
let sizeButton = document.querySelector('#size');
let size = 0;
let grids = 0;

for (let i = 0; i < 100; i++){
    let div = document.createElement('div');
    div.classList.add('grid');
    container.appendChild(div);
};

sizeButton.addEventListener('click', function () {
    size = prompt("What would you like your grid size by? Enter one number, it will automatically add the second. Ex: 10 -> 10x10");
    if(size > 100){
        size = 100;
    }
    size = parseInt(size);

    let divs = document.querySelectorAll('.grid');

    divs.forEach((divi) => {
        divi.remove();
    });

    makeNewGrid();
});

function makeNewGrid(){

let boxSize = (Math.sqrt(902500/(size*size))) - 2;

for (let i = 0; i < size*size; i++){
    let div = document.createElement('div');
    div.classList.add('grid');
    div.setAttribute('style', 'min-width: ' + boxSize + "px; min-height: " + boxSize + 'px; max-width: ' + boxSize + "px; max-height: " + boxSize + "px;");
    container.appendChild(div);
};

grids = document.querySelectorAll(".grid");

grids.forEach(grid => grid.addEventListener('mouseover', () => {
    grid.style.background = "black";
}));


}

grids = document.querySelectorAll(".grid");

grids.forEach(grid => grid.addEventListener('mouseover', () => {
    grid.style.background = "black";
}));