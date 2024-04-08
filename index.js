import inquirer from "inquirer";
import chalk from "chalk";
// 1) todos Array.
// 2) Create function.
// 3) Operation.
let todos = [];
console.log(chalk.magenta.bold("\n\t  WELCOME TO TODO List \n"));
let condition = true;
while (condition) {
    let answer = await inquirer.prompt([
        {
            type: "list",
            message: chalk.yellowBright("What you want to do?"),
            name: "wantToDo",
            choices: ["Add", "Update", "View", "Delete", "Exit"],
        },
    ]);
    //  check for contions
    if (answer.wantToDo === "Add") {
        console.log("add block");
        let addTodo = await inquirer.prompt([
            { type: "input", name: "add", message: "add item.." }
        ]);
        todos.push(addTodo.add);
        console.log(todos);
    }
    else if (answer.wantToDo === "Delete") {
        if (todos.length > 0) {
            let deleteTodo = await inquirer.prompt([
                { type: "list", name: "delete", message: "Choose the item to delete..",
                    choices: todos.map(item => item)
                }
            ]);
            let afterdeleteList = todos.filter(item => item !== deleteTodo.delete);
            todos = [...afterdeleteList];
            console.log(todos);
        }
        else {
            console.log('Nothing to delete your list is empty');
        }
    }
    else if (answer.wantToDo === "Update") {
        //  check if the list is empty
        if (todos.length > 0) {
            // do
            let updateTodo = await inquirer.prompt([
                { type: "list", name: "update", message: "Choose the item to update..",
                    choices: todos.map(item => item)
                }
            ]);
            // update value insert 
            let addTodo = await inquirer.prompt([
                { type: "input", name: "add", message: "update item..", }
            ]);
            let afterdeleteList = todos.filter(item => item !== updateTodo.update);
            todos = [...afterdeleteList, addTodo.add];
            console.log(todos);
        }
        else {
            console.log('Nothing to update your list is empty');
        }
    }
    else if (answer.wantToDo === "View") {
        console.log(todos);
    }
    else {
        console.log('exist');
        condition = false;
        break;
    }
}
