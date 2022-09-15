const Employee = require('./Employee')

class Manager extends Employee {
     constructor(name, id, email, officeNumber) {

        super(name, id, email)
        this.officeNumber = officeNumber
}
    getRole(){
        return "Manager"
    }
    getOfficeNumber(){
        return this.officeNumber
    }
}
module.exports = Manager;
// managerQuestions() {
//     inquirer
//     .prompt ([
//         {
//         type: "input",
//         name: "teamManager",
//         message: "Who is the team manager of the project?"
//         },
//         {
//             type: "input",
//             name: "managerID",
//             message: "Please insert the manager's employee ID."
//             },
//         {
//             type: "input",
//             name: "managerEmail",
//             message: "Please include the manager's email address.",
//         },
//         {
//             type: "input",
//             name: "managergitHub",
//             message: "Add the manager's GitHub username.",
//         },
//     ])
//     .then((answers) => {
//         const newHTML = `<!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta http-equiv="X-UA-Compatible" content="IE=edge">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
//             <title>Your Team</title>
//         </head>
//         <body>
//             <div class="card col d-flex justify-content-center" style="width: 18rem; background-color: black; text-align: center; margin: 0 auto; float: none; margin-bottom: 10px;">
                
//                 <div class="card-body">
//                     <h5 class="card-title" style="font-size: 25px; font-weight: bold; color: white;"> Manager: ${answers.teamManager}
//                     </h5>
//                     <li class="card-text" style="background-color: rgb(197, 194, 194);">
//                         <ul class="card-text" style="background-color: rgb(197, 194, 194);">ID: ${answers.managerID}</ul> 
//                      <ul class="card-text" style="background-color: rgb(197, 194, 194);">Email: ${answers.managerEmail}</ul> 
//                      <ul class="card-text" style="background-color: rgb(197, 194, 194);">GitHub: ${answers.managergitHub}</ul>
//                     </li>
//                 </div>
//             </div>
//         </body>
//         </html>`

//         fs.writeFile('newHTML.html', newHTML, err => err ? console.log(err) : console.log("Sucessful"))
//     })
//     }
    
// }

// addMember()




