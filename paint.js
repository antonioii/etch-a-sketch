let inkColor = 'black';
let pressed = 'false';

function pressing(e){
    if(pressed){
        pressed = false;
    } else {
        pressed = true;
        painting(e);
    }
}


function painting(e){
    if(pressed == true){
        e.target.style.setProperty('background-color',`${inkColor}`);
    }
}

function nPressed(){
    pressed = false;
}

function paint(){
    //take all the columns been currently been displayed, they represents the 'squares' inside the canvas
    let columns = document.querySelectorAll('.canvasColumn');
    //for each column taken, add an event listener
    columns.forEach(square => {
        //cover all the user actions trying to paint using a mouse
      //  square.addEventListener('click', pressing);
        square.addEventListener('drag',painting);
        square.addEventListener('mouseup', nPressed);
        square.addEventListener('mousedown',painting);
        //square.addEventListener('mouseover', painting);
    });
}



//call the paint function
paint();