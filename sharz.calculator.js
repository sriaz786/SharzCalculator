#! /usr/bin/env node
import inquirer from "inquirer";
let result1, result2, result3, result4;
const answers = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber"
    },
    {
        message: "Enter Second number", type: "number", name: "secondNumber"
    },
    {
        message: "select one of the operators to perform action", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statement//
if (answers.operator === "Addition") {
    result1 = answers.firstNumber + answers.secondNumber;
    console.log(result1);
}
else if (answers.operator === "Subtraction") {
    result2 = answers.firstNumber - answers.secondNumber;
    console.log(result2);
}
else if (answers.operator === "Multiplication") {
    result3 = answers.firstNumber * answers.secondNumber;
    console.log(result3);
}
else if (answers.operator === "Division") {
    result4 = answers.firstNumber / answers.secondNumber;
    console.log(result4);
}
else {
    console.log("please select valid operator");
}
