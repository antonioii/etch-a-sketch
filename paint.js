//color used to make the paint
let inkColor = 'black';

//function to paint
function paint(){
    //take all the columns been currently been displayed, they represents the 'squares' inside the canvas
    let columns = document.querySelectorAll('.canvasColumn');
    //for each column taken, add an event listener
    columns.forEach(square => { 
        //a mousemove listener with the event.button of a left click inside it to capture the 'click and drag' drawing functionality   
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