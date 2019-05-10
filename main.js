//constants 
const equals = document.getElementById('equal-sign') 

//event listeners 
equals.addEventListener('click', add)

//variables
let valueDisplay = document.getElementById('total')
let runningTotal = 0

//functions 
 display()

function add() {
    let leftInput = document.getElementById('left')
    let rightInput = document.getElementById('right')
    let left = parseInt(leftInput.value)
    let right = parseInt(rightInput.value)
    let addition = left + right
    runningTotal += addition
    display()
}

function display() {
    valueDisplay.innerHTML = 'Running Total: +' + runningTotal
}