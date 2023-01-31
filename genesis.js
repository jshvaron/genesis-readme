const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        name: 'answer',
        message: 'Is this a test?',

    }
]).then((answers) => {
    if (answers.answer === 'yes') {
        console.log(' are you sure????');

    }}
);