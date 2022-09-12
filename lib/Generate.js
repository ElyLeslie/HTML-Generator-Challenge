const inquirer= require("inquirer")
const fs = require('fs')
// 
// 
const Manager = require('./manager')


function addMember(){
    inquirer
 .prompt ([
    {
        type: "list",
        name: "memberChoice",
        message: "Which of the following would you like to add to your team?",
        choices: ["Engineer", "Intern", "Exit Program"],
    },
        ])
    .then((userChoice => {
        switch (userChoice.memberChoice) {
            case "Engineer":
                const Engineer = require('./engineer');
                ;
                break;
            case "Intern":
                const Intern = require('./intern');
                ;
            default:
                console.log("Program closing...")

        }
    }))


}

Manager.then(addMember())

// addMember()