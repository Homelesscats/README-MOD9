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
    //    Quick and easy README. Generator 
   {
    type: 'input',
    name: 'description', 
    message: 'Please enter a description of the project',
   },
//        An easy to use application to produce a high-quality README for the this app and future projects

   {
    type: 'input',
    name: 'installation',
    message:'How do you install this app?',
   },
// clone this repo, navigate to the index.js file, open the terminal within vs code right click on the "index.js file, right click and select 'open in integrated terminal' "
   {
   type: 'input',
   name: 'usage',
   message: 'Please enter usage information',
   },
// Once you have navigated to the correct file launch the app ny typing "Node index.js" in the terminal
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
//NA
   {
   input:'input',
   name: 'tests',
   message: 'Please enter test instructions',
   },
// I use this section to ensure the application is working correctly using "node index.js"
   {
   input: 'input',
   name: 'gitHubUsername',
   message: 'Please enter your Github username:',
   },    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
       console.log(fileName)
       console.log(data)
       if (err) {
        return console.log(err)
       } else {
        console.log("Success!!")
       }
       })
    }
    

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
 .then(function(data) {
   writeToFile("README.md", generateMarkdown(data));
   console.log(data)
   
 })

}





// Function call to initialize app
init();
