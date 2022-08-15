// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const blankLine = `\n\n`

  console.log(data);
  let markdown = `# ${data.title}${blankLine}`;

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

    markdown += `### Collaborators${blankLine}`;

    for (const collaborator of collaboratorArr) {
      markdown += `- [${collaborator}](https://github.com/${collaborator})\n`;
    };

    markdown += `${blankLine}`;
  };
  if (data.assets) {
    const assetArr = data.assets.split(' ');

    markdown += `### Third-Party Assets${blankLine}`;

    for (const asset of assetArr) {
      markdown += `- ${asset}\n`;
    };

    markdown += `${blankLine}`;
  };

  if (data.contribution) {
    markdown += `## Contributing${blankLine}${data.contribution}${blankLine}`;
  };

  if (data.test) {
    markdown += `## Tests${blankLine}${data.test}${blankLine}`;
  };

  if (data.questionContact) {
    const questionContactArr = data.questionContact.split(' ');

    markdown += `## Questions${blankLine}- [${questionContactArr[0]}](https://github.com/${questionContactArr[0]})${blankLine}- <${questionContactArr[1]}>${blankLine}`;
  };

  return markdown;
};

module.exports = generateMarkdown;
