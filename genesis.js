//Require Items
const inquirer = require('inquirer');
const fs = require(`fs`);

//Inquire prompts that will outline the generated readme
inquirer.prompt([
    {
        type: 'input',
        name: 'project',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'desctiption',
        message: 'How would you describe the project?',
    },
    {
        type: 'input',
        name: 'contents',
        message: 'What are the table of contents?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How does the user install this application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How does someone use this project?',
    },
    { // added a list to select from the licenses available
        type: 'list',
        name: 'license',
        message: 'What license(s) does this project have?',
        choices: ['MIT License', 'Mozilla Public License 2.0', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide guidlines for open source contribution.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do we test this app?',
    },
// .then to take the answers from our prompt above
]).then(answers => {
    const readme = `# ${answers.project}
    
## Description
    
    ${answers.description}

## Table of Contents

    ${answers.contents}
    
## Installation
    
    ${answers.install}

## Usage

    ${answers.usage}

## Licenses

    ${answers.license}

## Contribute

    ${answers.contribution}

## Testing

    ${answers.test} `;

    console.log(readme);

    // takes the answers from prompt, takes the data, and writes the readme file w/returned msg
    fs.writeFile('README.md', readme, error =>{
        if (error) {
            console.log('ERROR');
            return;
        }
        console.log('Your README.md has arrived.')
});

});