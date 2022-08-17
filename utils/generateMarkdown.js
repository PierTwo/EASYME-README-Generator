// Creates a blank string for the markdown to be written to
let markdown = '';
// Creates a variable that will skip over a line before the next section of the string
const blankLine = `\n\n`;

// Function to render the license badge using the license that was passed to the function
function renderLicenseBadge(license) {
  // Render the license badge based on what option the user chose
  if (license === 'MIT') {
    markdown += `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)${blankLine}`;
  };

  if (license === 'GPLv2') {
    markdown += `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://choosealicense.com/licenses/gpl-2.0/)${blankLine}`;
  };

  if (license === 'Apache 2.0') {
    markdown += `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://choosealicense.com/licenses/apache-2.0/)${blankLine}`;
  };

  if (license === 'GPLv3') {
    markdown += `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)${blankLine}`;
  };
};

// Function to render the license link using the license that was passed to the function
function renderLicenseLink(license) {
  // Render the license link based on what license the user chose otherwise if None was selected don't do anything
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

// Renders the license section
function renderLicenseSection(license) {
  // Adds a License heading
  markdown += `## License${blankLine}`;

  // If None was selected render that the project is not licensed otherwise render that the project is licensed with the license the user chose
  if (license === 'None') {
    markdown += `This project is not licensed.${blankLine}`
  } else {
    markdown += `This Project is licensed with ${license} for more info please refer to license link or the LICENSE.md${blankLine}`;
  };
  // Calls the renderLicenseLink to render the link to the license and pass it the license argument as a parameter
  renderLicenseLink(license)
};

// Function to generate the markdown using the data from the inquirer response
function generateMarkdown(data) {
  // Render a title
  markdown = `# ${data.title}${blankLine}`;

  // Call renderLicenseBadge to render the badge underneath the title
  renderLicenseBadge(data.license);

  // Renders a section for each response if it has a truthy value
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

    if (data.contact) {
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

  // If either the collaborators or assets is truthy render a Credits section
  if (data.collaborators || data.assets) {
    markdown += `## Credits${blankLine}`;
  };
  if (data.collaborators) {
    // Split each collaborator into an array
    const collaboratorArr = data.collaborators.split(' ');

    markdown += `#### Collaborators${blankLine}`;

    // For each of the collaborators in the array, render them as a list
    for (const collaborator of collaboratorArr) {
      markdown += `- GitHub: [${collaborator}](https://github.com/${collaborator})\n`;
    };

    markdown += `\n`;
  };
  if (data.assets) {
    // Split each asset into an array
    const assetArr = data.assets.split(' ');

    markdown += `#### Third-Party Assets${blankLine}`;

    // For each of the assets in the array, render them as a list 
    for (const asset of assetArr) {
      markdown += `- ${asset}\n`;
    };

    markdown += `\n`;
  };

  // Calls the renderLicenseSection with the license response passed to it
  renderLicenseSection(data.license);


  if (data.contribution) {
    markdown += `## Contributing${blankLine}${data.contribution}${blankLine}`;
  };

  if (data.test) {
    markdown += `## Tests${blankLine}${data.test}${blankLine}`;
  };

  if (data.contact) {
    // Split the contact info into an array
    const contactArr = data.contact.split(' ');
    // Render the markdown with the GitHub username as a link using the first array item and the email as a link using the second array item
    markdown += `## Questions${blankLine}You can find me here:\n- GitHub: [${contactArr[0]}](https://github.com/${contactArr[0]})\n- Email: <${contactArr[1]}>`;
  };

  // Return the markdown variable
  return markdown;
};

// Modularize and export generateMarkdown
module.exports = generateMarkdown;
