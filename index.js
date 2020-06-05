const inquirer = require("inquirer");
const util = require("util");
const fs = require('fs');
const {questions} = require('./questions');
const generateMarkdown = require('./generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);

async function init(){
    try {
        const answers = await inquirer.prompt(questions);
        await writeFileAsync("README.md", generateMarkdown(answers));

        const {username, name, license} = answers;
        const str = `You have successfully wrote a README.md for your ${name} repo`
        const strLength = str.length;
        let border = "-".repeat(strLength);

        const successMessage = `
        ${border}
        ${str}
        ${border}
        `
        console.log(successMessage);
    }
    catch(err) {
        console.log(err);
    }
}

init();