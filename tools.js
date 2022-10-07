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
let eraserBtn = document.querySelector('.eraserImg');
eraserBtn.addEventListener('click', () => {
    inkColor = backgroundColor;
    rainbowBtnPressed = false;
    paint();
});
