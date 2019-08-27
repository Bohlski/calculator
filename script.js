const mainDisplay = document.querySelector('.display-output');
const formulaDisplay = document.querySelector('.display-formula');
const operators = {
	plus: add,
	minus: subtract,
	mult: multiply,
	div: divide,
	mod: modulus
};

let firstNum = 0
let secondNum = 0
let isSecondNum = false
let toEvaluate = ''
let currOperator = ''

function clickDigit(digit) {
	// Concatenate as long as no operator has been pressed, and update display
	toEvaluate += digit;
	mainDisplay.textContent = toEvaluate;
}

function clickOperator(operator) {
	isSecondNum = true
	firstNum = parseInt(mainDisplay.textContent)
	currOperator = operators[operator]
	toEvaluate = ''
}

// TODO: atm, doesn't work correctly with repeated presses
function clickEquals() {
	secondNum = parseInt(mainDisplay.textContent)
	result = currOperator(firstNum, secondNum)
	mainDisplay.textContent = result
	isSecondNum = false // Reset
	toEvaluate = ''
}

function clickClear() {
	console.log('Cleared')
	mainDisplay.textContent = '0'
	firstNum = 0
	secondNum = 0
	isSecondNum = false
	toEvaluate = ''
	currOperator = ''
}

// Funcs for calculating operations by currying
function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function modulus(num1, num2) {
	return num1 % num2;
}

// For allowing keyboard key presses
function pressButton(event) {
	let keypress = event.key;
	if (!['0','1','2','3','4','5','6','7','8','9'].includes(keypress)) {
		return;
	}

	clickDigit(keypress);
}
window.addEventListener('keypress', pressButton);