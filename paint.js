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

             event.preventDefault(); //this cancel the event to propagate
             if(rainbowBtnPressed){
                inkColor = randomColor();
                square.style.setProperty('background-color',`${inkColor}`);
             } else {
             square.style.setProperty('background-color',`${inkColor}`);  }   

            }
           });   
    });
}

/*

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


*/


//call the paint function
paint();


//RAINBOW
//rainbow button
let rainbowBtnPressed = false;

//random function
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//rainbow function
function rainbowPaint() {
    rainbowBtnPressed = true;
}

//color random
function randomColor(){
    return ( //rgb(r,g,b)
    `rgb(${randomIntFromInterval(0,2)}${randomIntFromInterval(0,5)}${randomIntFromInterval(0,5)},
         ${randomIntFromInterval(0,2)}${randomIntFromInterval(0,5)}${randomIntFromInterval(0,5)},
         ${randomIntFromInterval(0,2)}${randomIntFromInterval(0,5)}${randomIntFromInterval(0,5)}
         )`
    )

    //return a string with a random color, e.g rgb(000,000,000)
}

let rainbowBtn = document.querySelector('.rainbowImg');
rainbowBtn.addEventListener('click',rainbowPaint);
  
