// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description
  ${data.description}


  ## Table of Contents
  - [Installation](#Installtion)
  - [Credits](#Credits)
  - [Usage](#Usage)
  - [License](#License)


  ## Installation
  ${data.installation}


  ## Credits
  ${data.credits}


  ## Usage
  ${data.usage}


  ## License
  ${data.license}


  <img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
`;
}

module.exports = generateMarkdown;
