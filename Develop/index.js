// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
inquirer
  .prompt(questions);
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])

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
        name: 'GitHub username',
        message: 'What is your GitHub username?',
      },

      {
        type: 'input',
        name: 'email address',
        message: 'What is your email address?',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
