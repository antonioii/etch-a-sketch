let inkColor = 'black';
let pressed = 'false';

function paint(){
    //take all the columns been currently been displayed, they represents the 'squares' inside the canvas
    let columns = document.querySelectorAll('.canvasColumn');
    //for each column taken, add an event listener
    columns.forEach(square => {    
        square.addEventListener('mousemove', function(event) {
            if(event.buttons == 1) {
             event.preventDefault();           
             square.style.setProperty('background-color',`${inkColor}`);           
            }
           });   
    });
}



//call the paint function
paint();