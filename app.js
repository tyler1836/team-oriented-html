const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const makeEmployee = require("./lib/makeEmployee");
const inquirer = require("inquirer");
const {questions, questionsManager} = require("./lib/questions");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const people = [];
async function init(question) {
    const person = await inquirer.prompt(question);
    const newEmp = makeEmployee(person);
    people.push(newEmp);
    if (person.another) init(questions);
    if (person.manager) init(questionsManager);
    else {
        const template = render(people);
        fs.writeFile(outputPath, template, (err) => 
        err ? console.log(err) : console.log("Success"));
    }
}
init(questionsManager);