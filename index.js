
const inquirer = require('inquirer');
const fs = require('fs')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const arr = []
function promptManager() {
    inquirer
        .prompt ([
            {
            type: "input",
            name: "name",
            message: "Who is the team manager of the project?"
            },
            {
                type: "input",
                name: "id",
                message: "Please insert the manager's employee ID."
                },
            {
                type: "input",
                name: "email",
                message: "Please include the manager's email address.",
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Add the manager's office number.",
            },
        ])
        .then((answers) => {
            let manager = new Manager(answers.name, answers.id, answers.email, answers.managerOfficeNumber)
            arr.push(manager)
            addMember()
            const newHTML = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
            <title>Your Team</title>
        </head>
        <body>
            <div class="card col d-flex justify-content-center" style="width: 18rem; background-color: black; text-align: center; margin: 0 auto; float: none; margin-bottom: 10px;">
                
                <div class="card-body">
                    <h5 class="card-title" style="font-size: 25px; font-weight: bold; color: white;"> Manager: ${answers.name}
                    </h5>
                    <li class="card-text" style="background-color: rgb(197, 194, 194);">
                        <ul class="card-text" style="background-color: rgb(197, 194, 194);">ID: ${answers.id}</ul> 
                     <ul class="card-text" style="background-color: rgb(197, 194, 194);">Email: <a href="https://${answers.email}">${answers.email}</a></ul> 
                     <ul class="card-text" style="background-color: rgb(197, 194, 194);">Office Number: ${answers.managerOfficeNumber}</ul>
                    </li>
                </div>
            </div>
        </body>
        </html>`

        fs.writeFile('./dist/newHTML.html', newHTML, err => err ? console.log(err) : console.log("Sucessful"))
    })
}

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
                   engineerQuestions();
                   
                   break
               case "Intern":
                   
                   internQuestions();
                   break
               default:
                   console.log("Program closing...")
   
           }
       })) 
}
function internQuestions(){
    inquirer
    .prompt ([
        {
        type: "input",
        name: "name",
        message: "Who is the team intern of the project?"
        },
        {
            type: "input",
            name: "id",
            message: "Please insert the intern's employee ID."
            },
        {
            type: "input",
            name: "email",
            message: "Please include the intern's email address.",
        },
        {
            type: "input",
            name: "school",
            message: "Add the intern's school.",
        },
    ])
    .then((answers) => {
        let intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        arr.push(intern)
        addMember()
        const internInfo = `
        <div class="card col d-flex justify-content-center" style="width: 18rem; background-color: black; text-align: center; margin: 0 auto; float: none; margin-bottom: 10px;">
            
            <div class="card-body">
                <h5 class="card-title" style="font-size: 25px; font-weight: bold; color: white;"> Intern: ${answers.name}
                </h5>
                <li class="card-text" style="background-color: rgb(197, 194, 194);">
                    <ul class="card-text" style="background-color: rgb(197, 194, 194);">ID: ${answers.id}</ul> 
                 <ul class="card-text" style="background-color: rgb(197, 194, 194);">Email: <a href="https://${answers.email}">${answers.email}</a></ul> 
                 <ul class="card-text" style="background-color: rgb(197, 194, 194);">School: ${answers.school}</ul>
                </li>
            </div>
        </div>`

    fs.appendFile('./dist/newHTML.html', internInfo, err => err ? console.log(err) : console.log("Sucessful"))
})
    }
    
    

function engineerQuestions(){
        inquirer
        .prompt ([
            {
            type: "input",
            name: "name",
            message: "Who is the team engineer of the project?"
            },
            {
                type: "input",
                name: "id",
                message: "Please insert the engineer's employee ID."
                },
            {
                type: "input",
                name: "email",
                message: "Please include the engineer's email address.",
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Add the engineer's gitHub username.",
            },
        ])
        .then((answers) => {
            let engineer = new Engineer(answers.name, answers.id, answers.email, answers.engineerGithub)
            arr.push(engineer)
            addMember()
        const engineerInfo = `
        <div class="card col d-flex justify-content-center" style="width: 18rem; background-color: black; text-align: center; margin: 0 auto; float: none; margin-bottom: 10px;">
            
            <div class="card-body">
                <h5 class="card-title" style="font-size: 25px; font-weight: bold; color: white;"> Engineer: ${answers.name}
                </h5>
                <li class="card-text" style="background-color: rgb(197, 194, 194);">
                    <ul class="card-text" style="background-color: rgb(197, 194, 194);">ID: ${answers.id}</ul> 
                    <ul class="card-text" style="background-color: rgb(197, 194, 194);">Email: <a href="https://${answers.email}">${answers.email}</a></ul> 
                    <ul class="card-text" style="background-color: rgb(197, 194, 194);">GitHub: <a href="https://www.github.com/${answers.engineerGithub}">${answers.engineerGithub}</a></ul>
                </li>
            </div>
        </div>`

    fs.appendFile('./dist/newHTML.html', engineerInfo, err => err ? console.log(err) : console.log("Sucessful"))
        }) }
     

        promptManager()
