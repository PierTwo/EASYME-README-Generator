// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let markdown = '';
const blankLine = `\n\n`;

function renderLicenseBadge(license) {
  if (license === 'MIT') {
    markdown += `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)${blankLine}`;
  };

  if (license === 'GPLv2') {
    markdown += `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)${blankLine}`;
  };

  if (license === 'Apache 2.0') {
    markdown += `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)${blankLine}`;
  };

  if (license === 'GPLv3') {
    markdown += `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)${blankLine}`;
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    markdown += `License Link: [${license}](https://choosealicense.com/licenses/mit/)${blankLine}`;
  };

  if (license === 'GPLv2') {
    markdown += `License Link: [${license}](https://choosealicense.com/licenses/gpl-2.0/)${blankLine}`;
  };

  if (license === 'Apache 2.0') {
    markdown += `License Link: [${license}](https://choosealicense.com/licenses/apache-2.0/)${blankLine}`;
  };

  if (license === 'GPLv3') {
    markdown += `License Link: [${license}](https://choosealicense.com/licenses/gpl-3.0/)${blankLine}`;
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  markdown += `# License${blankLine}`;

  if (license === 'None') {
    markdown += `This project is not licensed.${blankLine}`
  } else {
    markdown += `This Project is licensed with ${license} for more info please refer to license link or the LICENSE.md${blankLine}`;
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  markdown = `# ${data.title}${blankLine}`;

  renderLicenseBadge(data.license);

  if (data.description) {
    markdown += `## Description${blankLine}${data.description}${blankLine}`;
  };
  if (data.descrBuild) {
    markdown += `- ${data.descrBuild}\n`;
  };
  if (data.descrSolve) {
    markdown += `- ${data.descrSolve}\n`;
  };
  if (data.descrLearn) {
    markdown += `- ${data.descrLearn}${blankLine}`;
  };

  if (data.tableOfContents) {
    markdown += `## Table of Contents${blankLine}`;

    if (data.install) {
      markdown += '- [Installation](#installation)\n';
    };

    if (data.usage) {
      markdown += '- [Usage](#usage)\n';
    };

    if (data.collaborators || data.assets) {
      markdown += '- [Credits](#credits)\n';
    };

    if (data.license) {
      markdown += '- [License](#license)\n';
    };

    if (data.contribution) {
      markdown += '- [Contributing](#contributing)\n';
    };

    if (data.test) {
      markdown += '- [Tests](#tests)\n';
    };

    if (data.questionContact) {
      markdown += '- [Questions](#questions)';
    };

    markdown += `${blankLine}`;
  };

  if (data.install) {
    markdown += `## Installation${blankLine}${data.install}${blankLine}`;
  };

  if (data.usage) {
    markdown += `## Usage${blankLine}${data.usage}${blankLine}`;
  };

  if (data.collaborators || data.assets) {
    markdown += `## Credits${blankLine}`;
  };
  if (data.collaborators) {
    const collaboratorArr = data.collaborators.split(' ');

    markdown += `#### Collaborators${blankLine}`;

    for (const collaborator of collaboratorArr) {
      markdown += `- GitHub: [${collaborator}](https://github.com/${collaborator})\n`;
    };

    markdown += `${blankLine}`;
  };
  if (data.assets) {
    const assetArr = data.assets.split(' ');

    markdown += `#### Third-Party Assets${blankLine}`;

    for (const asset of assetArr) {
      markdown += `- ${asset}\n`;
    };

    markdown += `${blankLine}`;
  };

  renderLicenseSection(data.license);
  renderLicenseLink(data.license);

  if (data.contribution) {
    markdown += `## Contributing${blankLine}${data.contribution}${blankLine}`;
  };

  if (data.test) {
    markdown += `## Tests${blankLine}${data.test}${blankLine}`;
  };

  if (data.questionContact) {
    const questionContactArr = data.questionContact.split(' ');

    markdown += `## Questions${blankLine}You can contact me here:\n- GitHub: [${questionContactArr[0]}](https://github.com/${questionContactArr[0]})${blankLine}- Email: <${questionContactArr[1]}>${blankLine}`;
  };

  return markdown;
};

module.exports = generateMarkdown;
