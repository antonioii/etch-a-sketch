//RAINBOW BUTTON
    //is in paint.js

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