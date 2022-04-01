const firstNumber = getNumber("Enter your first number: ");
const secondNumber = getNumber("Enter your second number: ");
const operation = getOperation("Enter the operation you want to do(/,*,-,+):");
let result = calculate(firstNumber, secondNumber, operation);

showResult(firstNumber, secondNumber, operation, result);

function getNumber(message) {
  let check = prompt(message);
  while (checkNumber(check) === false || check === null) {
    return getNumber(message);
  }
  return +check;
}

function checkNumber(number) {
  if (isNaN(number)) {
    alert("You didn't enter a number.");
    return false;
  } else {
    return true;
  }
}

function getOperation(operator) {
  let check = prompt(operator);
  while (checkOperation(check) === false || check === null) {
    return getOperation(operator);
  }
  return check;
}

function checkOperation(operator) {
  if (
    operator != "+" &&
    operator != "-" &&
    operator != "/" &&
    operator != "*"
  ) {
    alert("You didn't enter an operation.");
    return false;
  } else {
    return true;
  }
}

function calculate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "/":
      return firstNumber / secondNumber;
    case "*":
      return firstNumber * secondNumber;
  }
}

function showResult(firstNumber, secondNumber, operator, result) {
  alert("Result: " + firstNumber + operator + secondNumber + " = " + result);
}
