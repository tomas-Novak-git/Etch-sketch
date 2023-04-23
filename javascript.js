const valueText = document.getElementById("valueText");
const paintSquare = document.getElementById("paintSquare");
const paintArea = document.getElementById("paintArea");
document.getElementById("text");

let newColor = "#ff0000";
let click = true;

// grid squares generating func
function createPaintArea(size){
    let paintArea = document.getElementById("paintArea");
    paintArea.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    paintArea.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let numSquares = size * size;
    for (let i = 0; i < numSquares; i++){
        let div = document.createElement("div");
        div.setAttribute("id", "paintSquare");
        div.addEventListener('mouseover', colorSquare)
        paintArea.insertAdjacentElement("beforeend", div)
    }
}

// boardClean function to clear container before adding more divs.
// Doesn't allow stacking countless divs.
function boardClean(){
    let paintArea = document.getElementById("paintArea");
    paintArea.innerHTML = "";
}

// // Slider - value and grid making func
const slider = document.getElementById('slider');
slider.addEventListener('input', sliderChange);
let size = 4;

function sliderChange() {
    valueText.textContent = `${slider.value} x ${slider.value}`;
    size = document.getElementById("slider").value;
    boardClean();
    createPaintArea(size);
}

// color choosing funcs
const chooseColor = document.querySelector('#favcolor');
chooseColor.addEventListener('input', () => {
    newColor = document.getElementById("favcolor").value;
})
function colorSquare () {
   if (click){
    if(newColor == 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
    this.style.backgroundColor = newColor;
    }
}
}

function randomChange() {
    newColor = "random";
}
// reset Button
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetButton);

function resetButton() {  
    let Area = paintArea.children;
    for (let i = 0; i < size * size; i++) {
        Area[i].style.backgroundColor = "lightgrey";
    }
}
// func that disables painting on click.

document.querySelector('#paintArea').addEventListener('click', ()=> {
    click = !click;
    if (click === false){
        text.textContent = "Painting OFF";
    } else {
        text.textContent = "Painting ON";
    }
})
// function textContent(click) {
//     if (click === true){
//         text.textContent = "Painting is ON"
//     } else {
//         text.textContent = "Painting is OFF"
//     }
// }
createPaintArea(size);