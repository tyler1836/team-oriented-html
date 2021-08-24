const inquirer = require('inquirer')
const page = require('./assets/generate-site')
const { writeFile, copyFile } = require('./assets/writefile.js')

// var teamData = [];

const promptUser = () => {

  return inquirer.prompt([
    {
      type: 'confirm',
      name: 'start',
      message: 'Would you like to create a team page?'
    }
  ]);
};

const promptData = templateData => {
  if (!templateData.teamData) {
    templateData.teamData = [];
  }
  return inquirer.prompt([
    {
      type: 'list',
      name: 'job',
      message: 'Please select their role.',
      choices: ['engineer', 'intern']
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your team member name?',
      validate: name => {
        if (name) {
          return true;
        }
        else {
          console.log('Please enter their name!')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter their GitHub Username',
      validate: userName => {
        if (userName) {
          return true;
        }
        else {
          console.log('Please enter their Username!')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your employee\'s id?'
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school does your intern go to?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is their email?'
    },
    {
      type: 'confirm',
      name: 'more',
      message: 'Would you like to add another member?',
      default: false
    }
  ])
    .then(data => {
      teamData.push(data)
      if (data.more) {

        return promptData(templateData);
      }
      else {
        return templateData;
      }
    })

};


promptUser()
  .then(promptData)
  .then(templateData => {
    return page(templateData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });

module.export = teamData;