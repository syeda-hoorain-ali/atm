import chalk from "chalk";
import inquirer from "inquirer";
import { validateName, validatePin } from "./validation.js";
//* Function to take user data one time
export const userData = async () => {
    const user = await inquirer.prompt([
        {
            message: chalk.yellow("Enter your user id: "),
            name: "userId",
            type: "input",
            validate: validateName,
        },
        {
            message: chalk.yellow("Enter your pin: "),
            name: "pin",
            type: "input",
            validate: validatePin,
        },
        {
            message: chalk.yellow("Select your account type: "),
            name: "account",
            type: "list",
            choices: ['Current', 'Saving'],
        },
    ]);
};
//* Function to ask user for transition
export const transitionType = async () => {
    const { transition } = await inquirer.prompt([
        {
            message: chalk.yellow("Select transition you want to: "),
            name: "transition",
            type: "list",
            choices: ['Withdraw', 'Deposit', 'Transfer', 'Inquiry'],
        },
    ]);
    return transition;
};
//* Function to ask user if he/she want to do another transition
export const again = async () => {
    const { useAgain } = await inquirer.prompt([
        {
            message: chalk.yellow("Do you want to do another transition "),
            name: "transition",
            type: "confirm"
        },
    ]);
    return useAgain;
};
