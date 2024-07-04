// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![github license](https://img.shields.io.badge/license-${license}-green.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !=="none"){
    return `\n*[license](#license)\n`
  };
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license !== "none") {
    return `## License
    Licesnsed under the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by${data.name}
  ##Table of Contents
  *[GitHub](#github)
  *[email](email)
  *[Project Name](#title)
  *[Description](#description)
  * [usage](#usage)
  *[installation](#installation)
  *[dependencies](#required)
  *[license](#license)
  *[test](#tests)
  *[contributions](#contribute)
  ##Contact info
  *Name- ${data.name}
  *GitHub - ${data.github}
  *Email - ${data.email}
  ## License
  ${renderLicenseBadge(data.license)}
  ## Description 
  ${data.description}
  ## Usage
  ${data.usage}
  ## Installation
  ${data.installation}
  ## Required dependencies
  ${data.required.join('\n* ')}
  ## Tests
  ${data.tests}
  ## Contributions
  ${data.contribute}
  

`;
}

module.exports = generateMarkdown;
