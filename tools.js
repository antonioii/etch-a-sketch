//RAINBOW BUTTON
    //is in paint.js

//PENCIL AND PAINT BRUSH BUTTONS
let pencilBtn = false;
let paintBrush = true;

let pencilBtnPressed = document.querySelector('.pencilImg');
pencilBtnPressed.addEventListener('click', () => {
    pencilBtn = true;
    paintBrush = false;

});
let paintBrushPressed = document.querySelector('.brushImg');
paintBrushPressed.addEventListener('click', () => {
    pencilBtn = false;
    paintBrush = true;

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
    //is in paint.js

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
    } else {
        eraserBtnPressed = true;
    };


    paint();
});
