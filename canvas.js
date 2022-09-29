function createCanvas(nOfSquares) {
    //make squares
    for(let i = 0; i<nOfSquares;i++){
        //create line based on the number of squares
        let newLine = document.createElement('div');
        newLine.textContent = '';
        newLine.classList.add('canvasLine');
        newLine.style.setProperty('display',`flex`); 
        newLine.style.setProperty('flex',`1 1 100%`); 
        canvas.appendChild(newLine);        
        
        //create columns (based on the number of squasres for each line
        for(let j = 0; j<nOfSquares;j++) {
        let newColumn = document.createElement('div');
        newColumn.textContent = 'X';
        newColumn.classList.add('canvasColumn');
        newColumn.style.setProperty('flex',`1 1 100%`);
        newLine.appendChild(newColumn);
        }
    }

}

function deleteCanvasLines(){
    //take all the lines
    let lines = document.querySelectorAll('.canvasLine');
    //for each line taken, delete
    lines.forEach(line => {
        console.log(canvas.removeChild(line));
    });
}

//number of initial squares inside the canvas
let nOfSquares = 1;

//change the initial squares
    //take the select tag
let sizeChoice = document.querySelector('select');
    //add an event listener change
sizeChoice.addEventListener('change',() => {
    //take the current state of the select tag options
    let select = document.getElementById('squareComposition');
    //take its current value and store in a 'value' variable
    let value = select.options[select.selectedIndex].value;
    //use a regex to select only numbers in the value and assign it to the variable
    value = value.match(/[0-9]{1,2}/);
    //assign the first element in the object array which corresponds to the number been showing, as e.g _16x16 will be 16
    value = value[0];
    //delete the previous canvas lines
    deleteCanvasLines();
    //call the createCanvas function with the nOfSquares = value
    createCanvas(value);    
});

//canvas board node
let canvas = document.querySelector('.canvasBoard');

//start the initial canvas sample
createCanvas(nOfSquares);






