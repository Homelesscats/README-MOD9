// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   
if (!license) {
  return ``;
} else if (license == "MIT") {
  return `[![MIT license](https://img.shields.io/badge/License-${license}-yellow.svg)]`; 

} else if (license == "APache 2.0") {
return `[![Apache 2.0 license](https://img.shields.io/badge/License-${license}-blue.svg)]`;

} else if (license == "GLP 3.0") {
  return `[![License: GPL v3](https://img.shields.io/badge/License-${license}-blue.svg)]`;
 
  }       

};

const licenseBadges = {
 MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',

 Apache:  '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
 
 GPL: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',


};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 
  if (!license) {
    return ``;

  } else if (license == "MIT") {
    return `[![MIT license](https://img.shields.io/badge/License-${license}-yellow.svg)]`;

  } else if (license == "Apache 2.0") {
    return  `[![Apache 2.0 license](https://img.shields.io/badge/License-${license}-blue.svg)]`;

  } else if (license == "GLP 3.0") {
    return  `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;

  }

}

function renderLicenseLink(license) {

  if (license ==="")
    return ``;
  if (license == "MIT") 
    return licenseURL.MIT.toString();
  if (license == "Apache2.0")
    return licenseURL.Apache2.toString();
  if (license == "GLP")
    return licenseURL.GLP,toString();

}





// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) 

{
  if (license === "none") {

    return `This app is not licensed`;
    }

  if (license == "MIT") {
    return `This application is covered under the MIT license`;  
     
    }  

  if (license == "Apache2.0 license") {
    return `This application is covered under the Apache 2.0 license`;
    
    }

    if (license == "GLP 3.0 license") {
      return `This application is covered under the GLP 3.0 license `;

    }

};



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  
   # ${data.title}


   ## Description
   ${data.description}

   ## Table of Contents
   - [Description](#description)
   - [Installation](#installation)
   - [Usage](#usage)
   - [License](#license)
   - [Contributing](#contributing)
   - [Tests](#tests)
   - [Questions](#questions)
   
 
   
   ## Installation 
   What dependencies are required to run the application: ${data.installation}
   
   ## Usage
   In order to use this app: ${data.Usage}
   
   ## License
   This project is licensed under the ${data.license}
 
   ## Contributing
   ${data.contributing}
   
   ## Tests
 
   The following is needed to run the test: ${data.Tests}
   
   ## Questions
   If you have any questions, you can reach out to me via GitHub or email:
   - GitHub: [Homelesscats](https://https://github.com/Homelesscats)
   - Email: ${data.email}
 
`;
}

module.exports = generateMarkdown;
