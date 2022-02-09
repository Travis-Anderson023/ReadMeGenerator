let inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "list",
        message: "What would you like to do?",

    }
])
.then((answers) => {
    let readme = 
`# ${answers.title}

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
    });