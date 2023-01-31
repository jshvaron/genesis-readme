const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: '',
        name: '',
        message: '',
    },
    {
        type: 'input',
        name: 'answer',
        message: 'Is this a test?',
    },
    {
        type: 'input',
        name: 'answer',
        message: 'Is this a test?',
    },
    {
        type: 'input',
        name: 'answer',
        message: 'Is this a test?',
    },
    {
        type: 'input',
        name: 'answer',
        message: 'Is this a test?',
    },
    {
        type: 'input',
        name: 'answer',
        message: 'Is this a test?',
    },
    {
        type: 'input',
        name: 'answer',
        message: 'Is this a test?',
    },


]).then((answers) => {
    if (answers.answer === 'yes') {
        console.log('STILL A BUSTUH');

    }}
);