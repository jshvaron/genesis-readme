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
        name: 'description',
        message: 'How would you describe the project?',
    },
    {
        type: 'confirm',
        name: 'contents',
        message: 'Do you require a Table of Contents?',
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
        choices: ['MIT License', 'The Unlicense', 'Mozilla Public License 2.0']
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
    {
        type: 'input',
        name: 'questions',
        message: 'What is your Github Username?',
    },
// .then to take the answers from our prompt above
]).then(answers => {

    //creates licensing badge
    let badge;
        switch(answers.license){

            case 'MIT License':
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            break;

            case 'The Unlicense':
            badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
            break;

            case 'Mozilla Public License 2.0':
            badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
            break;
        
    }

    // generates licensing text screenshot 
    let licenseText;
        switch(answers.license){
            case 'MIT License':
                licenseText = '\n\nMIT License\n\n![MIT License Image](assets/MIT.png)'
                break;

            case 'Mozilla Public License 2.0':
                licenseText = '\nMozilla Public License 2.0\n\n![Mozilla Public License 2.0 Image](assets/MPL.png)'
                break;

            case 'The Unlicense':
                licenseText = '\n\nThe Unlicense\n\n![The Unlicense Image](assets/UNL.png)'
                break;
    }   
    // adds Table of Content hyper links based off inquirer confirmation BUG: Why are these not hyper link jumping?
    let toc;
    switch(answers.contents){
        case true: 
            toc = '\n- [Installation](##installation) \n- [Usage](##usage) \n- [Licenses](##licenses) \n- [Contribute](##contribute) \n- [Testing](##testing) \n- [Questions](##questions)\n\n'
            break;

        case false:
            toc = 'Take a look around!'
            break;
    }


    const readme = `# ${answers.project}

   ${badge} 

## Description
    
    ${answers.description}

## Table of Contents

    ${toc}
    
## Installation
    
    ${answers.install}

## Usage

    ${answers.usage}

## Licenses

    ${licenseText}

## Contribute

    ${answers.contribution}

## Testing

    ${answers.test} 

## Questions
 

Please reach out to via Github: https://github.com/${answers.questions} or create an issue on the correlating repo page. My email is also located on my Github profile for further communication.

`

    

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