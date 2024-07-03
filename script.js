alert(
  "Welcome to the calculator!"
);

console.log("Hello");

let firstNum = parseInt(prompt("Please enter a first number:"));
while(!Number.isInteger(firstNum)){
    firstNum = parseInt(prompt("The input was not valid. Please enter a first number:"));
}

let secondNum = parseInt(prompt("Please enter a second number:"));
while(!Number.isInteger(secondNum)){
    secondNum = parseInt(prompt("The input was not valid. Please enter a first number:"));
}

let expression = prompt("Please enter an arithmetic expression:", "+, -, * or /.");

let result;

switch(expression){
    case "+":
        result = `${firstNum} + ${secondNum} = ` + (firstNum + secondNum);
        alert(result);
        console.log(result);
        break;
    case "-":
        result = `${firstNum} - ${secondNum} = ` + (firstNum - secondNum)
        alert(result);
        console.log(result);
        break;
    case "*":
        result = `${firstNum} * ${secondNum} = ` + (firstNum * secondNum);
        alert(result);
        console.log(result);
        break;
    case "/":
        if(firstNum == 0){
            alert("You can't divide a by zero. Please reload the page.");
            console.log("You can't divide a by zero. Please reload the page.");
            break;
        }
        else{
            result = `${firstNum} / ${secondNum} = ` + (firstNum / secondNum)
            alert(result);
            console.log(result);
            break;
        }
    default:
        alert("The input did not match the arithmetic expressions. Please reload the page.")
}

alert("Your calculation has been calculated. Press the ok button to reload the page");

location.reload();