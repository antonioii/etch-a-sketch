let inkColor = 'black';

function paint(){
    //take all the columns been currently been displayed, they represents the 'squares' inside the canvas
    let columns = document.querySelectorAll('.canvasColumn');
    //for each column taken, add an event listener
    columns.forEach(square => {
        square.addEventListener('click', () => console.log('hello'));
    });
}

//call the paint function
paint();



//iterar o canvasbox
//para cada div dentro dele
//adcidionar event listener
//muda o div background collor