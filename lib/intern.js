const inquirer = require('inquirer')
const fs = require('fs')

class Intern{

    constructor(answers){
         
    this.answers = this.internQuestions()}

    internQuestions() {
        inquirer
        .prompt ([
            {
            type: "input",
            name: "teamManager",
            message: "Who is the team intern of the project?"
            },
            {
                type: "input",
                name: "managerID",
                message: "Please insert the intern's employee ID."
                },
            {
                type: "input",
                name: "managerEmail",
                message: "Please include the intern's email address.",
            },
            {
                type: "input",
                name: "managergitHub",
                message: "Add the intern's GitHub username.",
            },
        ])
        .then((answers) => {
            const internInfo = `
                <div class="card col d-flex justify-content-center" style="width: 18rem; background-color: black; text-align: center; margin: 0 auto; float: none; margin-bottom: 10px;">
                    
                    <div class="card-body">
                        <h5 class="card-title" style="font-size: 25px; font-weight: bold; color: white;"> Intern: ${answers.teamManager}
                        </h5>
                        <li class="card-text" style="background-color: rgb(197, 194, 194);">
                            <ul class="card-text" style="background-color: rgb(197, 194, 194);">ID: ${answers.managerID}</ul> 
                         <ul class="card-text" style="background-color: rgb(197, 194, 194);">Email: ${answers.managerEmail}</ul> 
                         <ul class="card-text" style="background-color: rgb(197, 194, 194);">GitHub: ${answers.managergitHub}</ul>
                        </li>
                    </div>
                </div>`
    
            fs.appendFile('newHTML.html', internInfo, err => err ? console.log(err) : console.log("Sucessful"))
        })
        }
}


const newIntern = new Intern();

module.exports = Intern;



// fs.appendFile( path, data[, options], callback )