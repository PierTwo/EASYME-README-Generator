const questionsModule = require('./utils/questions');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const writeToFile = require('./utils/writeToFile');

const questions = questionsModule.questions;

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
            name: 'tableOfContents',
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
        {
            type: 'input',
            message: questions[11],
            name: 'collaborators',
        },
        {
            type: 'input',
            message: questions[12],
            name: 'assets',
        },
        {
            type: 'input',
            message: questions[13],
            name: 'questionContact',
        },
        {
            type: 'list',
            message: questions[14],
            name: 'license',
            choices: questionsModule.choices,
        },
    ])
        .then((response) => {
            const data = generateMarkdown(response);
            writeToFile(response.title, data);
        });
};

// Function call to initialize app
init();
