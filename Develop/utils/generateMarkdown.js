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

// TODO: Create a function to generate markdown for README
function generateMarkdown(input) {
  return `
  
  # ${input.title}

  ## ${renderLicenseSection(input.license)} ${renderLicenseBadge(input.license)}
  ### ${renderLicenseLink(input.license)}




`;
}

module.exports = generateMarkdown;
