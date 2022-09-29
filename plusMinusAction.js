let instructionPlusMinusButton = document.querySelector('.plusMinusInstruction');
let toolsPlusMinusButton = document.querySelector('.plusMinusTools');
let instructionsBox = document.querySelector('.instructionsBox');
let toolsBox = document.querySelector('.toolsBox');
let instructionBtnActivated = true;
let toolsBtnActivated = false;


function showHideInst() {
    if(instructionBtnActivated){
        instructionBtnActivated = false;
        instructionsBox.style.setProperty('display', 'none');
        instructionPlusMinusButton.textContent = '+';
    } else {
        instructionBtnActivated = true;
        instructionsBox.style.setProperty('display','');
        instructionPlusMinusButton.textContent = '-';
    }
}

function showHideTools() {
    if(toolsBtnActivated == true) {
        toolsBtnActivated = false;
        toolsBox.style.setProperty('display','');
        toolsPlusMinusButton.textContent = '-';
    } else {
        toolsBtnActivated = true;
        toolsBox.style.setProperty('display','none');
        toolsPlusMinusButton.textContent = '+';
    }
}

instructionPlusMinusButton.addEventListener('click', showHideInst);
toolsPlusMinusButton.addEventListener('click', showHideTools);
