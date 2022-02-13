//require inquirer and the local program that writes the file
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

//an array of questions for user input
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
        name: 'image',
        message: 'formatted image name:'
    },
    {
        type: 'input',
        name: 'localprojectfolder',
        message: 'name of local file folder in projects'
    },
    {
        type: 'input',
        name: 'description',
        message: 'project description:'
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'why did you build this?'
    },
    {
        type: 'input',
        name: 'function',
        message: 'what does it solve?'
    },
    {
        type: 'input',
        name: 'education',
        message: 'what did you learn?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'installation notes:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'usage notes:'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'contributors and attributions:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'tests:'
    },
    {
        type: 'input',
        name: 'author',
        message: 'author:',
        default: 'Becket, Codeclast'
    },
    {
        type: 'input',
        name: 'github',
        message: 'github username:',
        default: 'becketbowes'
    },
    {
        type: 'input',
        name: 'email',
        message: 'email address:',
        default: 'becketbowes@gmail.com'
    },
    {
        type: 'list',
        name: 'license',
        message: 'license:',
        choices: [
                    'ccAttribution', 
                    'ccAttributionShareAlike', 
                    'ccAttributonNonCommercial', 
                    'ccAttriubutionNonCommercialShareAlike', 
                    'mit', 
                    'copyLeft', 
                    'copyright'
                ]
    }
];

//run the questions, send call on the generateMarkdown.js file's functions to format and write it to the page
inquirer
  .prompt(questions)
  .then((answers) => {
    generateMarkdown(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error)
    } else {
      console.log(error)
    }
  });
