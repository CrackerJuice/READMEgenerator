// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![github license](https://img.shields.io.badge/license-${license}-green.svg)`;
}
//Gets license logo for whichever license is picked

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !=="none"){//checks if a license was picked, returns an empty string if none was selected
    return `\n[license](#license)\n`
  };
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { {
    return `## License
    Licesnsed under the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
//creates clickable links for table of contents and inputs what the user's answers 
function generateMarkdown(data) {
  return `# ${data.title}
  by${data.name}    
  ##Table of Contents 
  [GitHub](#github)
  [email](email)
  [Project Name](#title)
  [Description](#description)
  [usage](#usage)
  [installation](#installation)
  [dependencies](#required)
  [license](#license)
  [test](#tests)
  [contributions](#contribute)
  ##Contact info
  Name- ${data.name}
  GitHub - ${data.github}
  Email - ${data.email}
  ## License
  ${renderLicenseBadge(data.license)}
  ## Description 
  ${data.description}
  ## Usage
  ${data.usage}
  ## Installation
  ${data.installation}
  ## Required dependencies
  ${data.required.join}
  ## Tests
  ${data.tests}
  ## Contributions
  ${data.contribute}
  

`;
}

module.exports = generateMarkdown;
