// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util")
const generateMarkdown = require('./utils/generateMarkdown');





// TODO: Create an array of questions for user input
const questions = [

    {
    type: 'input',
    name: 'title',
    message:'Please enter the title of your project',
    },

   {
    type: 'input',
    name: 'description', 
    message: 'Please enter a description of the project',
   },

   {
    type: 'input',
    name: 'installation',
    message:'How do you install this app?',
   },

   {
   type: 'input',
   name: 'usage',
   message: 'Please enter usage information',
   },

   {
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your project',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],
   },

   {
   input:'input',
   name: 'contribution',
   message: 'Please enter contributing guidelines',
   },    

   {
   input:'input',
   name: 'tests',
   message: 'Please enter test instructions',
   },

   {
   input: 'input',
   name: 'gitHubUsername',
   message: 'Please enter your Github username:',
   },    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
