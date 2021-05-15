const { prompt } = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');
const allEmployees =[];


async function next(){
    let { employee } = await
        prompt({
            type: 'list',
            name: 'employee',
            message: 'What kind of employee would you like to add next?',
            choices: ['Engineer', 'Intern', 'None']
        })
    switch(employee){
        case 'Engineer': 
            createEngineer();
            break;
        case 'Intern':
            createIntern();
            break;
        default: 
            createFile();
    }
}


function createManager(){
   prompt([{
            type: 'input',
            name: 'managerName',
            message: 'Managers Name:'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'ID: '
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Email address: '
        },
        {
            type: 'input',
            name: 'officeNo',
            message: 'Office Number: '
        }
        ])
        .then((data) => {
            const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNo);
            allEmployees.push(manager);
            next();
        }) 

}



function createEngineer() {
    prompt([{
            type: 'input',
            name: 'engineerName',
            message: 'Engineers Name:'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'ID: '
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Email address: '
        },
        {
            type: 'input',
            name: 'github',
            message: 'GitHub Username: '
        }
        ])
        .then((data) => {
            const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.github);
            allEmployees.push(engineer);
            next();
        }) 


}



function createIntern(){
    prompt([{
            type: 'input',
            name: 'internName',
            message: 'Interns Name:'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'ID: '
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Email address: '
        },
        {
            type: 'input',
            name: 'school',
            message: 'School: '
        }
        ])
        .then((data) => {
            const intern = new Intern(data.internName, data.internId, data.internEmail, data.school);
            allEmployees.push(intern);
            next();
        }) 


}


function createFile(){
    fs.writeFile('employees.html', )
}


createManager();