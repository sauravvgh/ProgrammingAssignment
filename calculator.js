//program for a simple calculator
let result;

//taking the operator input
const operator = prompt('Enter operator(choose between +, -, *, /): '); // this program prompts the user to input the arithmetic symbol

//take the operand input
const number1= parseFloat(prompt('Enter first number:'));
const number2 = parseFloat(prompt("Enter second number:"));// this function parses a string and returns a floating point number, if there is a number inside a string, then it becomes the responsibility of a parse to acknowledge it

switch(operator){
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2}= ${result}`);
        break;
        case '-':
         result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
         result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
         result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}

