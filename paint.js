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

function paint(){
    //take all the columns been currently been displayed, they represents the 'squares' inside the canvas
    let columns = document.querySelectorAll('.canvasColumn');
    //for each column taken, add an event listener
    columns.forEach(square => {
        //cover all the user actions trying to paint using a mouse
        //square.addEventListener('click', painting);
        //square.addEventListener('mouseup', pressing);
        //square.addEventListener('mousedown',painting);
        //square.addEventListener('mouseover', painting);
    
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