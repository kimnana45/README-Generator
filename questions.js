module.exports = {
    questions: [
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "url",
            message: "the URL to your project?"
        },
        {
            type: "input",
            name: "name",
            message: "What is your project's name?"
        },
        {
            type: "input",
            name: "description",
            message: "Please write a short description of your project"
        },
        {
            type: "input",
            name: "role",
            message: "What is the user's role in your project's user story? (AS A ...)"
        },
        {
            type: "input",
            name: "goal",
            message: "What is the goal for your project user's story?(I WANT ...)"
        },
        {
            type: "input",
            name: "reason",
            message: "What is the reason for your project's user story?(SO THAT ...)"
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license would you like for your project?",
            choices: ["MIT","ISC","None"],
        },
        {
            type: "input",
            name: "installation",
            message: "What command should be run to install dependencies?",
            default: "npm i",
        },
        {
            type: "input",
            name: "usage",
            message: "What does the user need to know about using the repo?",
        },
    ]
}
