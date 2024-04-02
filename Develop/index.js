// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
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
        name: 'email address',
        message: 'What is your email address?',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, input) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(input){
      console.log(input);
    let rmFileInput = generateMarkdown(input);
    writeToFile(rmFileInput)
  });
}


// Function call to initialize app
init();

module.exports = questions;
