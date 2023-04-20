
const favcolor = document.getElementById("favcolor");
const resetBtn = document.getElementById("reset");
const valueText = document.getElementById("valueText");
const colorPick = document.getElementById("colorPick");
const fourByfour = document.getElementById("fourByfour");

// grid squares generating func

function createPaintArea(size){
    let paintArea = document.getElementById("paintArea");
    paintArea.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    paintArea.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let numSquares = size * size;
    for (let i = 0; i < numSquares; i++){
        let div = document.createElement("div");
        div.style.backgroundColor = "lightgrey";
        div.setAttribute("id", "paintSquare");
        paintArea.insertAdjacentElement("beforeend", div)
    }
}

// // Slider - value and grid making func

const slider = document.getElementById('slider');
slider.addEventListener('input', sliderChange);
let size = 4;
function sliderChange() {
    valueText.textContent = `${slider.value} x ${slider.value}`;
    size = document.getElementById("slider").value;
    createPaintArea(size);
}
createPaintArea(size);