const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');

// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  const badge = license === 'Apache 2.0' ? '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)' :
  license === 'MIT' ? '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)' :
  '';

return badge;
}

// function that returns the license link
function renderLicenseLink(license) {
  const linkForLicense = license === 'Apache 2.0' ? 'https://opensource.org/license/apache-2-0' :
  license === 'MIT' ? 'https://opensource.org/license/mit' :
  '';

return linkForLicense;
}

// function that returns the license section of README
function renderLicenseSection(license) {
  let sectionForLicense = license === 'None' ? '' : `License: ${license}`;
  return sectionForLicense;
}

// function to generate markdown for README
function generateMarkdown(input) {
  return `
# ${input['Project Title']}

## ${renderLicenseSection(input.License)} ${renderLicenseBadge(input.License)}

### [License Information](${renderLicenseLink(input.License)})

## Table of Contents:

### * [Description](#description)
### * [License](#license)
### * [Installation](#installation)
### * [Usage](#usage)
### * [Tests](#tests)
### * [Contributors](#contributors)
### * [Questions](#questions)

## Description
### ${input['Project Description']}

## Installation:
### You must install the following items for this app to function properly:
### ${input['Installation Instructions']}

## Usage:
### ${input['Usage Information']}

## Tests:
### Run the following commands in your terminal to test this app:
### ${input['Test Instructions']}

## Contributors:
### ${input['Contribution Guidelines']}

## Questions:
### If you have any questions, concerns or comments please contact me:
### Github: https://github.com/${input['GitHub username']}
### or
### Email: ${input['Email address']}
`;
}

module.exports = generateMarkdown;
