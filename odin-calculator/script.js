// * Elements
const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear");
const backspaceBtn = document.querySelector(".backspace");
const equalsBtn = document.querySelector(".equals");
const decimalBtn = document.querySelector(".decimal");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const history = document.querySelector(".history");

//  * Numbers and operator
let first = [];
let second = [];
let operator;
let answer;

// * Functionality
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const operate = function (num1, op, num2) {
  let firstNumber = +num1.join("");
  let secondNumber = +num2.join("");
  if (secondNumber === "" || firstNumber === "" || op === undefined) {
    answer = firstNumber || secondNumber || "";
  } else {
    switch (op) {
      case "+":
        answer = firstNumber + secondNumber;
        break;
      case "-":
        answer = firstNumber - secondNumber;
        break;
      case "x":
        answer = firstNumber * secondNumber;
        break;
      case "÷":
        if (secondNumber == 0) {
          answer = "Infinity";
        } else {
          answer = firstNumber / secondNumber;
        }
        break;
    }
  }
  if (operator) {
    history.innerHTML += `<p>${firstNumber} ${operator} ${secondNumber} = ${answer}</p>`;
  } else {
    history.innerHTML += `<p>${firstNumber} = ${answer}</p>`;
  }
  displayCalculation(answer);
};

const displayCalculation = (ans) => {
  if (!ans) {
    ans = "Error";
  }
  display.textContent = ans;
  first = ans.toString().split("") || [];
  second = [];
  operator = undefined;
};

const printToScreen = (num) => {
  if (
    num === "." &&
    ((first.includes(".") && !operator) || second.includes("."))
  )
    return;
  if (Number.isInteger(+num) || num === ".") {
    if (!operator) {
      first.push(num);
    } else {
      second.push(num);
    }
  }
  display.textContent += num;
};

const setOperator = (op) => {
  if (first != [] && second != [] && operator) {
    operate(first, operator, second);
  }
  operator = op;
  printToScreen(op);
};

const clear = () => {
  first = [];
  second = [];
  operator = undefined;
  answer = "";
  display.textContent = "";
  history.innerHTML = "";
};

const backspace = () => {
  let currentDisplay = display.textContent.split("");
  let removedChar = currentDisplay.pop();
  display.textContent = currentDisplay.join("");

  if (Number.isInteger(+removedChar) || removedChar === ".") {
    if (!operator) {
      let lastIndex = first.lastIndexOf(removedChar);
      first = first.slice(0, lastIndex);
    } else {
      lastIndex = second.lastIndexOf(removedChar);
      second = second.slice(0, lastIndex);
    }
  } else {
    operator = undefined;
  }
  printToScreen("");
};

// * Event Handling
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    let num = number.textContent;
    printToScreen(num);
  });
});

operators.forEach((op) => {
  op.addEventListener("click", () => {
    const type = op.textContent;
    setOperator(type);
  });
});

equalsBtn.addEventListener("click", function () {
  operate(first, operator, second);
});

clearBtn.addEventListener("click", clear);

backspaceBtn.addEventListener("click", backspace);

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "0":
      document.getElementById("zero").click();
      break;
    case "1":
      document.getElementById("one").click();
      break;
    case "2":
      document.getElementById("two").click();
      break;
    case "3":
      document.getElementById("three").click();
      break;
    case "4":
      document.getElementById("four").click();
      break;
    case "5":
      document.getElementById("five").click();
      break;
    case "6":
      document.getElementById("six").click();
      break;
    case "7":
      document.getElementById("seven").click();
      break;
    case "8":
      document.getElementById("eight").click();
      break;
    case "9":
      document.getElementById("nine").click();
      break;
    case "+":
      document.getElementById("add").click();
      break;
    case "-":
      document.getElementById("subtract").click();
      break;
    case "x":
      document.getElementById("multiply").click();
      break;
    case "÷":
      document.getElementById("divide").click();
      break;
    case "=":
      equalsBtn.click();
      break;
    case ".":
      decimalBtn.click();
      break;
    case "*":
      document.getElementById("multiply").click();
      break;
    case "/":
      document.getElementById("divide").click();
      break;
    case "Backspace":
      backspaceBtn.click();
      break;
    case "Enter":
      document.getElementById("equals").click();
      break;
    default:
      return false;
  }
});
