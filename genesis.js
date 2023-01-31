const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        name: 'projectName',
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
        message: 'How does the user install thos application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How does someone use this project?',
    },
    {
        type: 'input',
        name: 'liscence',
        message: 'What license(s) does this project have?',
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


]).then((answers) => {
    if (answers.answer === 'yes') {
        console.log('STILL A BUSTUH');

    }}
);