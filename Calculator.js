// Get HTML elements
const output = document.querySelector("#output");
const clearButton = document.querySelector("#clear");
const backspaceButton = document.querySelector("#backspace");
const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const subtractButton = document.querySelector("#subtract");
const addButton = document.querySelector("#add");
const equalsButton = document.querySelector("#equals");
const decimalButton = document.querySelector("#decimal");
const buttons = document.querySelectorAll("button");

// Initialize calculator variables
let firstOperand = null;
let operator = null;
let shouldReset = false;

// Add event listeners for buttons
buttons.forEach(button => {
    button.addEventListener("click", function() {
        const value = button.textContent;
        if (shouldReset) {
            output.textContent = "";
            shouldReset = false;
        }
        if (value >= "0" && value <= "9") {
            output.textContent += value;
        } else if (value === ".") {
            if (!output.textContent.includes(".")) {
                output.textContent += ".";
            }
        } else if (value === "C") {
            output.textContent = "";
            firstOperand = null;
            operator = null;
        } else if (value === "←") {
            output.textContent = output.textContent.slice(0, -1);
        } else if (value === "/") {
            if (operator) {
                calculate();
            }
            firstOperand = Number(output.textContent);
            operator = "/";
            output.textContent += " " + operator + " ";
            shouldReset = true;
        } else if (value === "*") {
            if (operator) {
                calculate();
            }
            firstOperand = Number(output.textContent);
            operator = "*";
            output.textContent += " " + operator + " ";
            shouldReset = true;
        } else if (value === "-") {
            if (operator) {
                calculate();
            }
            firstOperand = Number(output.textContent);
            operator = "-";
            output.textContent += " " + operator + " ";
            shouldReset = true;
        } else if (value === "+") {
            if (operator) {
                calculate();
            }
            firstOperand = Number(output.textContent);
            operator = "+";
            output.textContent += " " + operator + " ";
            shouldReset = true;
        } else if (value === "=") {
            calculate();
        }
    });
});

// Add event listener for backspace button
backspaceButton.addEventListener("click", function() {
    output.textContent = output.textContent.slice(0, -1);
});

// Add event listener for clear button
clearButton.addEventListener("click", function() {
    output.textContent = "";
    firstOperand = null;
    operator = null;
});

// Add event listener for decimal button
decimalButton.addEventListener("click", function() {
    if (!output.textContent.includes(".")) {
        output.textContent += ".";
    }
});

// Add event listener for equals button
equalsButton.addEventListener("click", function() {
    calculate();
});

// Calculate result of current operation
function calculate() {
    const secondOperand = Number(output.textContent);
    let result = null;
    switch (operator) {
        case "/":
            result = firstOperand / secondOperand;
            break;
        case "*":
            result = firstOperand * secondOperand;
            break;
        case "-":
            result = firstOperand - secondOperand;
            break;
        case "+":
            result = firstOperand + secondOperand;
            break;
    }
    output.textContent = result.toString();
    firstOperand = result;
    operator = null;
    shouldReset = true;
}
