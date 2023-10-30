// TODO: Include packages needed for this application
const fs = require("fs/promises");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of your project",
    name: "Name",
  },
  {
    type: "input",
    message: "Enter a short description of your project",
    name: "Description",
  },
  {
    type: "input",
    message: "Usage",
    name: "Usage",
  },
  {
    type: "input",
    message: "Contributing",
    name: "Contributing",
  },
  {
    type: "input",
    message: "how did you test your code",
    name: "Test",
  },
  {
    type: "list",
    name: "License",
    message: "Choose a license",
    choices: ["MIT", "Mozilla", "WTFPL", "Unlicense", "None"],
  },
];

// TODO: Create a function to write README file
async function writeToFile(data) {
  console.log(data);
  const file = await generateMarkdown(data);
  fs.writeFile("ReadMe.md", file, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

// TODO: Create a function to initialize app
async function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile(answers);
    })
    .catch((err) => {
      console.error(err);
    });
}

// Function call to initialize app
init();
