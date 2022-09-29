function createCanvas(nOfSquares) {
    //make squares
    for(let i = 0; i<nOfSquares;i++){
        //create line based on the number of squares
        let newLine = document.createElement('div');
        newLine.textContent = '';
        newLine.style.setProperty('display',`flex`); 
        newLine.style.setProperty('flex',`1 1 100%`); 
        canvas.appendChild(newLine);        
        
        //create columns (based on the number of squasres for each line
        for(let j = 0; j<nOfSquares;j++) {
        let newColumn = document.createElement('div');
        newColumn.textContent = 'square';
        newColumn.classList.add('canvasColumn');
        newColumn.style.setProperty('flex',`1 1 100%`);
        newLine.appendChild(newColumn);
        }
    }

}

//number of initial squares inside the canvas
let nOfSquares = 4;

//canvas board node
let canvas = document.querySelector('.canvasBoard');

createCanvas(nOfSquares);






