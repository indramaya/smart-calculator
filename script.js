let prevNumber ='';
let calculatorOpration ='';
let currentNumber ='0';
let status = 0;
let statuss = false;

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const calculatorScreen = document.querySelector('.calculator-screen')

const inputNumber = (number)=>{
    if (currentNumber === prevNumber && statuss === false){
        currentNumber='0';
        statuss = true;
    }
    if (currentNumber === '0'){
        currentNumber = number;
    } else {
        currentNumber += number;
    } 
    
}

const inputOperator = (operator) => {
    if (calculatorOpration !== "") calculate()
    prevNumber = currentNumber
    calculatorOpration = operator;

    statuss = false;
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
        updateScreen(event.target.value);
    })
})

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber); 
})

const calculate = () => {
    let result=0;

    switch(calculatorOpration) {
        case "+" :
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-": 
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break; 
    }
    currentNumber = result;
    calculatorOpration = '';
    prevNumber = currentNumber;
    statuss = false;
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen (currentNumber);
})

const clearAll = () => {
    prevNumber = '0';
    calculationOperator = '';
    currentNumber = '0';
    statuss = false;
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
}

const percentage = document.querySelector(".percentage")

percentage.addEventListener('click', () => {
    inputPercentage();
    updateScreen(currentNumber);
    statuss = false;
})

inputPercentage = () => {
    const hasilPerse = parseInt (currentNumber)/100;
    currentNumber = hasilPerse.toString();
    prevNumber = currentNumber;
}
