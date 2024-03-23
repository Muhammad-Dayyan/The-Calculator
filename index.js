#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        message: "Enter First Number",
        type: "number",
        name: "firstNumber"
    }, {
        message: "Enter Second Number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: [
            "ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION", "MODULES", "EXPONENT"
        ],
    },
]);
if (answer.operator === "ADDITION") {
    console.log(`Your answer is ${answer.firstNumber + answer.secondNumber}`);
}
else if (answer.operator === "SUBTRACTION") {
    console.log(`Your answer is ${answer.firstNumber - answer.secondNumber}`);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log(`Your answer is ${answer.firstNumber * answer.secondNumber}`);
}
else if (answer.operator === "DIVISION") {
    console.log(`Your answer is ${answer.firstNumber / answer.secondNumber}`);
}
else if (answer.operator === "MODULES") {
    console.log(`Your answer is ${answer.firstNumber % answer.secondNumber}`);
}
else if (answer.operator === "EXPONENT") {
    console.log(`Your answer is ${answer.firstNumber ** answer.secondNumber}`);
}
else {
    console.log("Please Enter the Value");
}
console.log(answer);
