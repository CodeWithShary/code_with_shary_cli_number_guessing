#! /usr/bin/env node
import inquirer from "inquirer";
// computer will generate a randum number
// user input for guessing number
// compare user input and computer generated number and tgan result 
const randumNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 6",
    }
]);
if (answer.userguessedNumber === randumNumber) {
    console.log("Congragulation you guessed a right number");
}
else {
    console.log("You guessed a wrong number");
}
