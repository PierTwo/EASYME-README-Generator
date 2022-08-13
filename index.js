// TODO: Include packages needed for this application
const questionsModule = require('./utils/questions');
const inquirer = require('inquirer');

const questions = questionsModule.questions;
// TODO: Create a function to initialize app
async function init() {
    inquirer.prompt([
        {
            type: 'confirm',
            message: questions[0],
            name: 'continue',
        },
    ])
        .then((response) => {
            if (!response.continue) {
                console.log('Goodbye!');
                process.exit()
            } else {
                mainPrompts();
            };
        });

    const mainPrompts = () => inquirer.prompt([
        {
            type: 'confirm',
            message: questions[1],
            name: 'tableOfContent',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'description',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'descrBuild',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'descrSolve',
        },
        {
            type: 'input',
            message: questions[6],
            name: 'descrLearn',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'install',
        },
        {
            type: 'input',
            message: questions[8],
            name: 'usage',
        },
        {
            type: 'input',
            message: questions[9],
            name: 'test',
        },
        {
            type: 'input',
            message: questions[10],
            name: 'contribution',
        },
    ])
        .then((response) => {
            console.log(response)
        });
};

// Function call to initialize app
init();
