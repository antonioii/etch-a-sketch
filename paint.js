let inkColor = 'black';

function paint(){
    //take all the columns been currently been displayed, they represents the 'squares' inside the canvas
    let columns = document.querySelectorAll('.canvasColumn');
    //for each column taken, add an event listener
    columns.forEach(square => {
        square.addEventListener('mouseover', () => square.style.setProperty('background-color',`${inkColor}`));
    });
}

//call the paint function
paint();