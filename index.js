const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
var prompt = inquirer.createPromptModule();


// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Project Title',
        message: 'What is your title of your project?',
      },

      {
        type: 'input',
        name: 'Project Description',
        message: 'Please enter a description of your application',
      },

      {
        type: 'input',
        name: 'Installation Instructions',
        message: 'Please enter installation instructions for your application',
      },

      {
        type: 'input',
        name: 'Usage Information',
        message: 'Please enter information on how to best use your application',
      },

      {
        type: 'input',
        name: 'Contribution Guidelines',
        message: 'Please enter contributors & guidelines for your application',
      },

      {
        type: 'input',
        name: 'Test Instructions',
        message: 'Please enter test instructions for your application',
      },

      {
        type: 'list',
        message: 'Which license does your project need to use?',
        name: 'License',
        choices: ['None','MIT','Apache 2.0'],
      },

    {
        type: 'input',
        name: 'GitHub username',
        message: 'What is your GitHub username?',
      },

      {
        type: 'input',
        name: 'Email address',
        message: 'What is your email address?',
      },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
  console.log('README.md file has been successfully generated!');
}

// function to initialize app()
function init() {
  prompt(questions)
      .then(function(input) {
          let rmFileInput = generateMarkdown(input);
          writeToFile('README.md', rmFileInput);
      });
}


// Function call to initialize app
init();

module.exports = questions;
