let prevNumber ='';
let calculatorOpration ='';
let currentNumber ='0';

const calculatorScreen = document.querySelector('.calculator-screen')

const inputNumber = (number)=>{
    if (currentNumber === '0'){
        currentNumber = number;
    } else {
        currentNumber += number;
    }
    
}

const inputOperator = (operator) => {
    prevNumber = currentNumber;
    calculatorOpration = operator;
    currentNumber = '';
}

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber);
    })   
})

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event)=> {
        inputOperator(event.target.value);
    })
})

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
    console.log('equal button is pressed')
})

