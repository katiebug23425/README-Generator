const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = license === 'Apache 2.0' ? '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)' :
  license === 'MIT' ? '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)' :
  '';

return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const linkForLicense = license === 'Apache 2.0' ? 'https://opensource.org/license/apache-2-0' :
  license === 'MIT' ? 'https://opensource.org/license/mit' :
  '';

return linkForLicense;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
