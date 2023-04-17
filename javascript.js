const paintBlocks = document.getElementById("paintBlock");
const mainBlock = document.getElementById("mainBlock");
const sixteenBtn = document.getElementById("sixteenBtn");
const thirtyTwoBtn = document.getElementById("thirtyTwoBtn");
const paintArea = document.getElementById("paintArea");

sixteenBtn.addEventListener("click", ()=> {
    for(let i = 0; i <= 16; i++) {
const createDiv = document.createElement("div");
createDiv.classList.add("paintSquare");
paintArea.appendChild(createDiv);}
document.querySelector("#sixteenBtn").disabled = true;
document.querySelector("#thirtyTwoBtn").disabled = false;
})

thirtyTwoBtn.addEventListener("click", ()=> {
    for(let i = 0; i <= 32; i++) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("paintSquare");
    paintArea.appendChild(createDiv);}
    document.querySelector("#thirtyTwoBtn").disabled = true;
    document.querySelector("#sixteenBtn").disabled = false;
    })