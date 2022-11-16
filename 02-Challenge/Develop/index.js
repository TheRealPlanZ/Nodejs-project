// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    },
    {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation path of your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license of your project?',
        choices: [
            'Apache',
            'MIT',
            'BSD',
            'GPL',
        ]
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Are there any tests in your project?',
    },
    {
        type: 'input',
        name: 'issues',
        message: 'Are there any issues in your project?',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            console.log(err);
        }
        console.log('Success!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        writeToFile('README.md', generateMarkdown(data));
    });

}




// Function call to initialize app
init();
