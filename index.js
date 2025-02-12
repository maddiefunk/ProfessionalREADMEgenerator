// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';



// TODO: Create an array of questions for user input
// what the app is for, how to use app, how to install app, how to report issues and how to make contributions&mdash
const questions = [ 
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'installation',
    message: 'How do you install this application?',
},
{
    type: 'input',
    name: 'usage',
    message: 'How do you use this application?',
},
{
    type: 'list',
    name: 'license',
    message: 'Choose a license for this application:',
    choices: [ 'MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None' ],
},
{
    type: 'input',
    name: 'test',
    message: 'What are the test instructions for this application?',
},
{
    type: 'input',
    name: 'contributions',
    message: 'How can you make contributions to this application?',
},
{
    type: 'input',
    name: 'questions',
    message: 'Please enter email and Github address so you can be contacted if there are questions.'
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error', err);
        } else {
            console.log('README file has been successfully generated!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const READMEContent = generateMarkdown(answers);
        writeToFile('README.md', READMEContent);
     })
     .catch((error) => {
     });  
    }


// Function call to initialize app

init();

function generateMarkdown(answers) {
return `
# ${answers.title}

## Description 
${answers.usage}

## Installation 
${answers.installation}

## Usage
${answers.usage}

## License 
${answers.license}

## Tests 
${answers.test}

## Contributions 
${answers.contributions}

## Questions 
${answers.questions}

`;
}
