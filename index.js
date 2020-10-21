// import dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const api = require("./api.js")
const generateMarkdown = require("./generateMarkdown.js")

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'github',
    message: "what's your GitHun Username?"
  },
  {
    type: 'input',
    name: 'title',
    message: "What's your project title?"
  },
  {
    type: 'input',
    name: 'description',
    message: "Describe your project"
  },
  {
    type: 'input',
    name: 'installation',
    message: "How should a user install it?"
  },
  {
    type: 'input',
    name: 'credits',
    message: "Enter credits"
  },
  {
    type: 'input',
    name: 'usage',
    message: "How does one use the application?"
  },
  {
    type: 'list',
    name: 'license',
    message: "What kind of license would you like?",
    choices: ['MIT', 'None']
  }
];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);

  });
}

// function call to initialize program
init();
