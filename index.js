// import dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const userExists = require("./api.js");
const api = require("./api.js")
const generateMarkdown = require("./generateMarkdown.js")

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
    type: 'input',
    name: 'testing',
    message: "How do users test?"
  },
  {
    type: 'input',
    name: 'email',
    message: "What's your email address?"
  },
  {
    type: 'list',
    name: 'license',
    message: "What kind of license would you like?",
    choices: ['MIT', 'Apache', 'GNU', 'None']
  }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
    if (err) {
      return console.log(err)
    }
  })
}

// function to initialize program
async function init() {

  // variable to hold account name
  let name;
  // variable that assures gitHub account exists
  let gitExists = false;
  
  // while no proper gitHub account name is given
  while (!gitExists) {
    
    // if real account is given, gitHub account exists and we can move on
    const {github: account} = await inquirer.prompt(getGit)
    name = account;
    
    const exists = await userExists(account)
    if (exists) {
      gitExists = true;
      console.log("username exists!")
    } else {
      console.log("username doesn't exist, try again")
    }
  }

  // store response
  const response = await inquirer.prompt(questions)
  // write to file
  writeToFile("README.md", generateMarkdown(response, name))
  
}

// function call to initialize program
init();