// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
import inquirer from 'inquirer';

function renderLicenseBadge(license) {
  if (license || license === 'None') {
    return ''; 
  }

  const badge = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache 2.0':'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GPL 3.0':'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD 3':'[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  };

  return badge[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') {
    return '';
  }
  return badge[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `## License\nThis project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, installation, usage, license, test, contributions, questions } = data;
  const badge = renderLicenseBadge(license);
  const licenseSection = renderLicenseSection(license);

  return `# ${title}
  ${badge}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Contributions](#contributions)
  - [Questions](#questions)

  ## Description
  ${usage}

   ## Installation
  ${installation}

   ## Usage
  ${usage}

  ${licenseSection}

   ## Tests
  ${test}

   ## Contributions
  ${contributions}

   ## Questions
  ${questions}
`;
}

export default generateMarkdown;
