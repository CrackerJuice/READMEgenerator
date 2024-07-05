// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");
const { type } = require("os");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    prompt: "Name your project.",
  },
  {
    type: "input",
    name: "description",
    prompt: "Write a description of your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install your project?",
  },
  {
    type: "input",
    name: "required",
    message: "List the dependencies of your project",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Choose a license for your project.",
    choices: [
      "Apache 2.0",
      "GNU General Public v3.0",
      "MIT",
      "BSD 2-Clause Simplified",
      "BSD 3-Clause New or Revised",
      "Boost Software 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public 2.0",
      "GNU Affero General Public v3.0",
      "GNU General Public v2.0",
      "GNU lesser General Public v2.1",
      "Mozilla Public 2.0",
      "The Unlicense",
    ],
    Default: "MIT",
  },
  {
    type: "input",
    name: "tests",
    message: "How do you test your project?",
  },
  {
    type: "input",
    name: "contribute",
    message: "How could somebody contribute to your project?",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log("Creating README.md file...");
    writeToFile("README.md", generateMarkdown({ ...answers }));
  });
}

// Function call to initialize app
init();
