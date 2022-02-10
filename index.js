let inquirer = require("inquirer");
let fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is your title?",
        name: "title",
    },
    {
        type: "input",
        message: "What is your description?",
        name: "description",
    },
    {
        type: "input",
        message: "What is your installation instructions?",
        name: "installation",
    },
    {
        type: "input",
        message: "How will your repo be used?",
        name: "usage",
    },
    {
        message: "Which license would you like to use?",
        type: "list",
        name: "license",
        choices: ["MIT License", "Apache License 2.0", "GNU GPLv3", "ISC License"]
    },
    {
        type: "input",
        message: "How To contribute?",
        name: "contributing",
    },
    {
        type: "input",
        message: "testing?",
        name: "tests",
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
])
    .then((answers) => {
        let badge;
        if (answers.license === "MIT License") {
        }
        let readme =
            `
# ${answers.title}

<img src="https://img.shields.io/badge/License-${answers.license}-blue">

## Description

${answers.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

${answers.license}

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions

You can reach the creator of this project at:
[Github](http://github.com/${answers.username})
[email]((mailto:${answers.email}))
${answers.questions}
    `
        fs.writeFile('GeneratedREADME.md', readme, function (error) {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Success!');
            }
        });
    });