const container = document.querySelector('.container');
const topContainer = document.createElement('div');
topContainer.classList.add('top-container');
document.body.appendChild(topContainer);
topContainer.appendChild(container);

//Randomize color throughout grid
function randomColor (){
    const squareColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    let color = `#${squareColor}`
    return color;
}

//Creating grid squares inside container.
function createGrid(gridSize){
    const squareSize = 500/gridSize
for(let i=0; i < gridSize * gridSize; i++){
    const square = document.createElement('div');
    square.classList.add('grid-square')
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    //Set opacity to 10%
    square.style.opacity = "0.1";
    container.appendChild(square);
    square.addEventListener('mouseover', ()=>{
        square.style.backgroundColor = randomColor();
        let currentOpacity = parseFloat(square.style.opacity);
        if (currentOpacity < 1){
            let newOpacity = (currentOpacity + 0.1);
            square.style.opacity = newOpacity.toFixed(1);
        }
    })
}
}
createGrid(16)

