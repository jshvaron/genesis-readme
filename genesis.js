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
    //creates licensing badge
    let badge;
        switch(answers.license){

            case 'MIT License':
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            break;

            case 'Mozilla Public License 2.0':
            badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
            break;

            case 'The Unlicense':
            badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
            break;
        
    }

    // generates licensing text screenshot FIX: how do I add this to the dedicated license section? When I move ${licenseText} it passes as plain text?????
    let licenseText;
        switch(answers.license){
            case 'MIT License':
                licenseText = '\n\nMIT License\n\n![MIT License Image](assets/MIT.png)'
                break;

            case 'Mozilla Public License 2.0':
                licenseText = '\n\nMozilla Public License 2.0\n\n![Mozilla Public License 2.0 Image](assets/MPL.png)'
                break;

            case 'The Unlicense':
                licenseText = '\n\nThe Unlicense\n\n![The Unlicense Image](assets/UNL.png)'
                break;
    }   

    const readme = `# ${answers.project}

   ${badge} 

## Description
    
    ${answers.description}

## Table of Contents

    ${answers.contents}
    
## Installation
    
    ${answers.install}

## Usage

    ${answers.usage}

## Licenses

    ${licenseText}

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