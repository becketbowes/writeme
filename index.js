// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown.js');

//move this?
// const inquirer = require('inquirer');
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });


// trying to fix a git issue - erase this later


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'project title:'
    },
    {
        type: 'input',
        name: 'version',
        message: 'version:',
        default: '1.0'
    },
    {
        type: 'input',
        name: 'title',
        message: 'project title:'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
