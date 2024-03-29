// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Project Title',
        message: 'What is your project Title?',
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
        message: 'Please enter usage information for your application',
      },

      {
        type: 'input',
        name: 'Contribution Guidelines',
        message: 'Please enter contribution guidelines for your application',
      },

      {
        type: 'input',
        name: 'Test Instructions',
        message: 'Please enter test instructions for your application',
      },

      {
        type: 'list',
        message: 'Which license would you like to add to your README?',
        name: 'License',
        choices: ['MIT', 'Apache', 'BSD','ISC'],
      },

    {
        type: 'input',
        name: 'GitHub username',
        message: 'What is your GitHub username?',
      },

      {
        type: 'input',
        name: 'email address',
        message: 'What is your email address?',
      },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
