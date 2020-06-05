generateMarkdown = answers => {
    const {username,
           email,
           name, 
           description,
           url,
           role, 
           goal, 
           reason, 
           license, 
           installation, 
           usage} = answers;
    
    const badge = license.replace(/\s/g, '%20');

    return ` # ${name}

[![GitHub license](https://img.shields.io/badge/license-${badge}-blue)](${url})

## Description 
${description}

    ## User Story
    \`\`\`
    AS A ${role}
    I WANT ${goal}
    SO THAT ${reason}
    \`\`\`

    ## Table of Content 
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Questions](#questions)
    
    ## Installation 
    \`\`\`
    ${installation}
    \`\`\`

    ## Usage
    ${usage}

    ## License
    ${license}

    ## Questions
    If you have any questions about the repo, please contact ${username} at ${email}.
    `
}

module.exports = generateMarkdown;