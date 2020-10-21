// function to generate markdown for README
function generateMarkdown(data, username) {
  return `# ${data.title}
  [![Generic badge](https://img.shields.io/badge/Licencse-${data.license}-<COLOR>.svg)](https://shields.io/)


  ## Description
  ${data.description}


  ## Table of Contents
  - [Installation](#Installation)
  - [Credits](#Credits)
  - [Usage](#Usage)
  - [Questions](#Questions)
  - [License](#License)


  ## Installation
  ${data.installation}


  ## Credits
  ${data.credits}


  ## Usage
  ${data.usage}


  ## Testing
  ${data.testing}


  ## Questions
  [link to my GitHub!](https://github.com/${username})
  [Email me!](mailto:${data.email})
  


  ## License
  ${data.license}


  <img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
`;
}

module.exports = generateMarkdown;
