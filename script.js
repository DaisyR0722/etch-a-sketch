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

