//create canvas
function createCanvas(nOfSquares) {
    for (let i = 0; i < nOfSquares; i++){
        let divisor = 100/(nOfSquares/2);
        let newDiv = document.createElement('div');
        newDiv.textContent = '.';
        newDiv.classList.add('canvaSquare');
        newDiv.style.setProperty('flex',`1 0 ${divisor}%`);    
        canvas.appendChild(newDiv);
        
    }
}

//number of squares inside the canvas
let nOfSquares = 4;

//canvas board node
let canvas = document.querySelector('.canvasBoard');

createCanvas(nOfSquares);





