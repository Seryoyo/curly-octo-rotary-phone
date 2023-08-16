let container = document.querySelector('#container');
let sizeButton = document.querySelector('#size');
let removeButton = document.querySelector('#remove');
let size = 16;
let grids = 0;

makeNewGrid();

sizeButton.addEventListener('click', function () {
    size = prompt("What would you like your grid size by? Enter one number, it will automatically add the second. Ex: 10 -> 10x10");
    if(size > 100){
        size = 100;
    }
    size = parseInt(size);


    makeNewGrid();
});

removeButton.addEventListener('click', function(){
    makeNewGrid();
});

function makeNewGrid(){


let divs = document.querySelectorAll('.grid');

divs.forEach((divi) => {
    divi.remove();
});

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