module.exports = {
    questions: [
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?",
            // default: "kimnnana45",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
            // default: "kimle.lek@gmail.com"
        },
        {
            type: "input",
            name: "url",
            message: "the URL to your project?",
            // default: "https://github.com/kimnana45/scheduler",
        },
        {
            type: "input",
            name: "name",
            message: "What is your project's name?",
            // default: "Scheduler",
        },
        {
            type: "input",
            name: "description",
            message: "Please write a short description of your project",
            // default: "A daily planner to help you organize your todo list."
        },
        {
            type: "input",
            name: "role",
            message: "What is the user's role in your project's user story? (AS A ...)",
            // default: "STUDENT"
        },
        {
            type: "input",
            name: "goal",
            message: "What is the goal for your project user's story?(I WANT ...)",
            // default: "TO bE Organize",
        },
        {
            type: "input",
            name: "reason",
            message: "What is the reason for your project's user story?(SO THAT ...)",
            // default: "I can finish all my todo list."
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license would you like for your project?",
            // choices: ["MIT","ISC","None"],
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
            // default: "Be mindful!",
        },
    ]
}
