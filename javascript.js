const valueText = document.getElementById("valueText");
const paintSquare = document.getElementById("paintSquare");
const paintArea = document.getElementById("paintArea");

let newColor = "#ff0000";
let dotBtn = 0;
let lineBtn = 1;

// grid squares generating func
function createPaintArea(size){
    let paintArea = document.getElementById("paintArea");
    paintArea.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    paintArea.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let numSquares = size * size;
    for (let i = 0; i < numSquares; i++){
        let div = document.createElement("div");
        div.setAttribute("id", "paintSquare");
        if (dotBtn == 0 && lineBtn == 1) {
            div.addEventListener('mouseover', function(event){
                event.target.style.backgroundColor = `${newColor}`;
            })
            } else if (dotBtn == 1 && lineBtn == 0) {
            div.addEventListener('mousedown', function(event){
                event.target.style.backgroundColor = `${newColor}`;
        })}
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

// color choosing func
const chooseColor = document.querySelector('#favcolor');
chooseColor.addEventListener('input', () => {
    newColor = document.getElementById("favcolor").value;
})

// reset Button
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetButton);

function resetButton() {  
    let Area = paintArea.children;
    for (let i = 0; i < size * size; i++) {
        Area[i].style.backgroundColor = "lightgrey";
    }
}
// paint type changers - DOT and LINE
let dotButton = document.getElementById("dot");
dotButton.addEventListener('click', dotFunc);

function dotFunc() {
    dotBtn = 1;
    lineBtn = 0;
    boardClean();
    createPaintArea(size);
}
let lineButton = document.getElementById("line");
lineButton.addEventListener('click', lineFunc);

function lineFunc () {
    lineBtn = 1;
    dotBtn = 0;
    boardClean();
    createPaintArea(size);
}

// random color generator
// const rainbow = document.querySelector("#randomColor");
// rainbow.addEventListener('click', () => {
//     const min = 1;
//     const max = 255;
//     const square = document.getElementById("paintSquare");
//     square.addEventListener('mousever', () => {
//     let red = Math.floor(Math.random() * (+max + 1 - +min)) + +min;
//     let green = Math.floor(Math.random() * (+max + 1 - +min)) + +min;
//     let blue = Math.floor(Math.random() * (+max + 1 - +min)) + +min;
//     newColor = `rgb(${red},${green},${blue})`;
//     console.log(newColor);
//     })
// })
createPaintArea(size);