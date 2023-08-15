let container = document.querySelector('#container');
for (let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        let div = document.createElement('div');
        div.className = "grid";
        container.appendChild(div);
        console.log("worked");
        div.text

    }
}

let boxes = document.querySelectorAll('.grid');

boxes.forEach(box => box.addEventListener('click', () => {
    box.style.cssText = "background-color: black;";
}))




