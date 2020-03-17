const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const managerQuestions = [
    {
      type: "input",
      message: "What is the manager's name?",
      name: "managerName"
    },
    {
        type: "input",
        message: "What is the manager's Id number?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is the manager's email address?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "managerOffice"
    }
  ];

function inputManager(){
    inquirer.prompt(managerQuestions)
    .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice)
    })

}