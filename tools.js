//RAINBOW
//rainbow button when pressed
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

}
//rainbow button
let rainbowBtn = document.querySelector('.rainbowImg');
rainbowBtn.addEventListener('click', () => {
    if(rainbowBtnPressed) {
        rainbowBtnPressed = false;
        rainbowBtn.style.setProperty('transform','scale(1.0');
        rainbowBtn.style.setProperty('justify-content','flex-end');
    } else {
        rainbowBtnPressed = true;
        rainbowBtn.style.setProperty('transform','scale(1.5');
        rainbowBtn.style.setProperty('justify-content','center');
        rainbowPaint();
    }
});
  

//PENCIL AND PAINT BRUSH BUTTONS
let pencilBtn = false;
let paintBrush = true;

let pencilBtnPressed = document.querySelector('.pencilImg');
pencilBtnPressed.addEventListener('click', () => {
    pencilBtn = true;
    pencilBtnPressed.style.setProperty('transform','scale(1.5)');
    paintBrush = false;
    paintBrushPressed.style.setProperty('transform','scale(1.0)');

});
let paintBrushPressed = document.querySelector('.brushImg');
paintBrushPressed.addEventListener('click', () => {
    pencilBtn = false;
    pencilBtnPressed.style.setProperty('transform','scale(1.0)');
    paintBrush = true;
    paintBrushPressed.style.setProperty('transform','scale(1.5)');

});

function changeSaturation(square) {
    if(paintBrush){
        square.style.opacity = "1";
    } else {
        let opacity = Number(square.style.opacity);
        square.style.opacity = (opacity >= 1? "1" : opacity + 0.1 + "")
    }
};


//COLOR PICKER
    //its functions and variables are inside paint.js

//CLEARALL
function clearCanvas(){
    let columns = document.querySelectorAll('.canvasColumn');
    columns.forEach(square => {
        //set each square to the backgroundColor choosen
        square.style.setProperty('background-color',`${backgroundColor}`);
       

    });
}

const CLEARALLBTN = document.querySelector('.clearallbtn');
CLEARALLBTN.addEventListener('click', clearCanvas);

//ERASER
let eraserBtnPressed = false;
let eraserBtn = document.querySelector('.eraserImg');
eraserBtn.addEventListener('click', () => {
    
    if(eraserBtnPressed) {
        eraserBtnPressed = false;
        eraserBtn.style.setProperty('transform','scale(1.0)');
        eraserBtn.style.setProperty('justify-content','flex-end');
    } else {
        eraserBtnPressed = true;
        eraserBtn.style.setProperty('transform','scale(1.5)');
        eraserBtn.style.setProperty('justify-content','center');
    };


    paint();
});
