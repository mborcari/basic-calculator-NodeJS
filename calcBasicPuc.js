function calcBasic(operator, firstNumber, secondNumber) {
    switch(operator) {
        case "+":
            return sumNumbers(firstNumber, secondNumber);
        case "-":
            return subNumbers(firstNumber, secondNumber);
        case "*":
            return multNumbers(firstNumber, secondNumber);
        case "/":
            return divNumbers(firstNumber, secondNumber);
        default:
            return "Favor informar somente uns dos operadores validos: '+', '-', '/', '*'"
    }
}

function sumNumbers(firstNumber, secondNumber){
    // Addition two numbers
    if (checkArgsEqualNumber(firstNumber, secondNumber)){
        return  firstNumber + secondNumber;
    } else {
        return errorIsNotNumbers();
    };
    
}

function subNumbers(firstNumber, secondNumber){
    // Subtraction two numbers

    if (checkArgsEqualNumber(firstNumber, secondNumber)){
        return  firstNumber - secondNumber;
    } else {
        return errorIsNotNumbers();
    }
}

function multNumbers(firstNumber, secondNumber){
    //multiplication two nunbers
    if (checkArgsEqualNumber(firstNumber, secondNumber)){
        return  firstNumber * secondNumber;
    } else {
        return errorIsNotNumbers();
    }
}

function divNumbers(firstNumber, secondNumber){
    // division two numbers
    if (checkArgsEqualNumber(firstNumber, secondNumber)){
        return (checkArgsEnableDivision(secondNumber)) ? firstNumber / secondNumber : "Não é possível dividir um número por zero";
    } else {
        return errorIsNotNumbers();
    }
}

function checkArgsEqualNumber(firstNumber, secondNumber) {
    if (typeof(firstNumber) == "number" && typeof(secondNumber) == "number") {
        return true;
    }
    return false;
}


function checkArgsEnableDivision(divisor) {
    if (divisor != 0){
        return true;
    }
    return false;
}

function errorIsNotNumbers() {
    return "Favor informar somente números para a operação";
}


module.exports = {calcBasic};