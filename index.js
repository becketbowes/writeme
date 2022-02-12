// TODO: Include packages needed for this application
// const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// const generate = require('./utils/generateMarkdown.js');

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
        name: 'imageone',
        message: 'image one:'
    },
    {
        type: 'input',
        name: 'imagetwo',
        message: 'image two:'
    },
    {
        type: 'input',
        name: 'imagethree',
        message: 'image three:'
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

inquirer
  .prompt(questions)
  .then((answers) => {
    data = (JSON.parse(answers))
    generateMarkdown(data)
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log('oh poop!');
    } else {
      console.log('oh neat!')
    }
  });

  
  module.exports = data; 
// Sample JSONparsed answers:
// ? project title: WRITEME
// ? version: 1.0
// ? project description: node js project to complete my READMEs for me, prompting me to make more complete and professional README files.
// ? why did you build this? I built this to help myself go through the process of making READMEs that would be worth reading.
// ? what does it solve? It helps me to focus on explaining the app that i've made in a different way.
// ? what did you learn? In making this app, i've learned that prompting questions in different ways changes the method of thinking that generates the answers.
// ? table of contents: don't need this as a question.
// ? installation notes: This has to run locally on the computer and requires several npm packages that will be listed below. 
// ? usage notes: Once installed, this can be run at the end of every project upon completion to finish my own thought process and share it with others.
// ? contributors and attributions: This was built entirely by me, with all credit due to the many people that wrote the modules on which this relies, Alan Turing, and all of the homies that made computers an
// d modern society a place where i could code.
// ? tests: this is not even running yet, so... not really anything i guess.
// ? author: Becket, Codeclast
// ? github username: becketbowes
// ? license: CC_Attriubution-NonCommercial-ShareAlike
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init(inquirer);
