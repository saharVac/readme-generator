// import dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const userExists = require("./api.js");
const api = require("./api.js")
const generateMarkdown = require("./generateMarkdown.js")

// variable that assures gitHub account exists
var gitExists = false;
let account;

// Question to obtain git account
const getGit = {
  type: 'input',
  name: 'github',
  message: "what's your GitHub Account?"
}

// array of questions for user
const questions = [
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
async function init() {
  
  // while no proper gitHub account name is given
  while (!gitExists) {
    
    // if real account is given, gitHub account exists and we can move on
    const {github: account} = await inquirer.prompt(getGit)
    const k = await userExists(account)
    console.log(k)
    if (k) {
      gitExists = true;
      console.log("here")
      console.log("username exists!")
    } else {
      console.log("username doesn't exist, try again")
    }
  }

  // store response
  const response = await inquirer.prompt(questions)
  // write to file
  fs.writeFile("README.md", generateMarkdown(response, account), function(err) {
    if (err) {
      return console.log(err)
    }
  })
}

// function call to initialize program
init();
