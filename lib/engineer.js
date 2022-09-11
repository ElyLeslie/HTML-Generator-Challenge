const inquirer = require('inquirer')
const fs = require('fs')

class Engineer{

    constructor(answers){
         
    this.answers = this.engineerQuestions()}

    engineerQuestions() {
        inquirer
        .prompt ([
            {
            type: "input",
            name: "teamManager",
            message: "Who is the team engineer of the project?"
            },
            {
                type: "input",
                name: "managerID",
                message: "Please insert the engineer's employee ID."
                },
            {
                type: "input",
                name: "managerEmail",
                message: "Please include the engineer's email address.",
            },
            {
                type: "input",
                name: "managergitHub",
                message: "Add the engineer's GitHub username.",
            },
        ])
        .then((answers) => {
            const engineerInfo = `
                <div class="card col d-flex justify-content-center" style="width: 18rem; background-color: black; text-align: center; margin: 0 auto; float: none; margin-bottom: 10px;">
                    
                    <div class="card-body">
                        <h5 class="card-title" style="font-size: 25px; font-weight: bold; color: white;"> Engineer: ${answers.teamManager}
                        </h5>
                        <li class="card-text" style="background-color: rgb(197, 194, 194);">
                            <ul class="card-text" style="background-color: rgb(197, 194, 194);">ID: ${answers.managerID}</ul> 
                         <ul class="card-text" style="background-color: rgb(197, 194, 194);">Email: ${answers.managerEmail}</ul> 
                         <ul class="card-text" style="background-color: rgb(197, 194, 194);">GitHub: ${answers.managergitHub}</ul>
                        </li>
                    </div>
                </div>`
    
            fs.appendFile('newHTML.html', engineerInfo, err => err ? console.log(err) : console.log("Sucessful"))
        })
        }
}


const newEngineer = new Engineer();

module.exports = Engineer;
