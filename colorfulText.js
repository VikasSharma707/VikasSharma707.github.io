// colorfulText.js

const chalk = require('chalk');

// Function to print colorful text
const printColorfulText = () => {
  console.log(chalk.red('Data Scientist') +
    chalk.orange(' with 1 year') +
    chalk.yellow(' of internship as') +
    chalk.green(' Machine Learning/Data Scientist Intern') +
    chalk.blue(' in software development firms and') +
    chalk.indigo(' 6 months') +
    chalk.blue(' of training in') +
    chalk.blue(' Google Cloud') +
    chalk.violet(', and with') +
    chalk.indigo(' 1+ year') +
    chalk.violet(' of experience as') +
    chalk.violet(' Python Development') +
    chalk.reset('.')
  );
};

// Call the function to print the colorful text
printColorfulText();
