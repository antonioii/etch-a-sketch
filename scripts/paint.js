//COLOR BUTTON
//color used to make the paint
let inkColor = 'blue';
let inkColorBtnColor = document.querySelector('.colorCircle');

let inkColorBtn = document.querySelector('#colorWheel');
inkColorBtn.addEventListener('input', () => {
    inkColor = inkColorBtn.value;
    inkColorBtnColor.style.setProperty('background-color', `${inkColor}`);
    paint();
});

//function to paint
function paint(){
    //take all the columns been currently been displayed, they represents the 'squares' inside the canvas
    let columns = document.querySelectorAll('.canvasColumn');
    //for each column taken, add an event listener
    columns.forEach(square => { 
        //a mousemove listener with the event.button of a left click inside it to capture the 'click and drag' drawing functionality   
        square.addEventListener('mousemove', function(event) {
            if(event.buttons == 1) {
             event.preventDefault(); //this cancel the event to propagate


             if(eraserBtnPressed) {
                square.style.setProperty('background-color',`${backgroundColor}`); 
                changeSaturation(square);
                
             } else {

                if(rainbowBtnPressed){
                    inkColor = randomColor();
                    square.style.setProperty('background-color',`${inkColor}`);
                    changeSaturation(square);
    
                 } else {
                 square.style.setProperty('background-color',`${inkColor}`); 
                 changeSaturation(square);
                }   
    

             }



            }
           });   
    });
}

//call the paint function
paint();



