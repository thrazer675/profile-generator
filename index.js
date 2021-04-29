const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./src/htmlTemplate");
const validator = require("email-validator");

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamString = ``;

console.clear();
console.log("---------------------------------------------");
console.log("Portfolio Generator by thrazer675")

async function main() {
    try {
        await prompt()

        for (let i = 0; i < teamArray.length; i++) {
            teamString = teamString + html.generateCard(teamArray[i]);
        }

        let finalHtml = html.generateHTML(teamString)

        console.clear();
        console.log("---------------------------------------------");
        console.log("Creating index.html file....");
        console.log("---------------------------------------------");

        writeFileAsync("./dist/index.html", finalHtml);

        console.clear();
        console.log("---------------------------------------------");
        console.log("index.html file successfully created!");
        console.log("---------------------------------------------");

    } catch (err) {
        return console.log(err);
    }
}

async function prompt() {
    let responseOver = "";

    do {
        try {
            console.log("---------------------------------------------");
            let response = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter employee's name:",
                    validate: function validateName(name) {
                        return name !== "";
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter employee's ID: ",
                    validate: function validateName(name) {
                        return name !== "";
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter employee's email: ",
                    validate: function validateName(name) {
                        return validator.validate(name);
                    }
                },
                {
                    type: "list",
                    name: "role",
                    message: "Enter the employee's role: ",
                    choices: [
                        "Engineer",
                        "Intern",
                        "Manager"
                    ]
                }
            ]);

            let answer = ""

            if (response.role === "Engineer") {
                answer = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "Enter the employee's github username: ",
                    validate: function validateName(name){
                        return name !== "";
                    },
                }, ]);

                const engineer = new Engineer(response.name, response.id, response.email, answer.x);
                teamArray.push(engineer);
            
            } else if (response.role === "Manager") {
                answer = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "Enter the employee's office number: ",
                    validate: function validateName(name){
                        return name !== "";
                    },
                }, ]);

                const manager = new Manager(response.name, response.id, response.email, answer.x);
                teamArray.push(manager);

            } else if (response.role === "Intern") {
                answer = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "In what school is the intern enrolled? ",
                    validate: function validateName(name){
                        return name !== "";
                    },
                }, ]);

                const intern = new Intern(response.name, response.id, response.email, answer.x);
                teamArray.push(intern);
            }
        } catch (err) {
            return console.log(err);
        }
        responseOver = await inquirer.prompt([{
            type: "list",
            name: "complete",
            message: "Keep Going? ",
            choices: [
                "Yes",
                "No"
            ]
        },]);
    } while (responseOver.complete === "Yes");
}

main();