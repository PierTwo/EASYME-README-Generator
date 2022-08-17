// Import the required modules
const inquirer = require('inquirer');
const questionsModule = require('./utils/questions');
const generateMarkdown = require('./utils/generateMarkdown');
const writeToFile = require('./utils/writeToFile');

// Creates a variable of the questions array from the questionsModule
const questions = questionsModule.questions;

// Function to initialize app with inquirer questions
function init() {
    // First inquirer prompt to confirm user wants to continue with app
    inquirer.prompt([
        {
            type: 'confirm',
            message: questions[0],
            name: 'continue',
        },
    ])
        // Then use the inquirer response to check if the user does not want to continue if so exit and print goodbye otherwise call the main prompts
        .then((response) => {
            if (!response.continue) {
                console.log('Goodbye!');
                process.exit()
            } else {
                mainPrompts();
            };
        });
    // Function to ask the main questions of the app for generating the markdown file
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
            name: 'contact',
        },
        {
            type: 'list',
            message: questions[14],
            name: 'license',
            choices: questionsModule.choices,
        },
    ])
        .then((response) => {
            // Then create a variable to equal to the generateMarkdown function and pass to the function the inquirer response
            const data = generateMarkdown(response);
            // Call writeToFile and pass to it the title response and the data variable which returns the markdown variable from the generateMarkdown function
            writeToFile(response.title, data);
        });
};

// Function call to initialize app
init();
