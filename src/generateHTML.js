// const Manager = require('../lib/Manager');
// const Engineer = require('../lib/Engineer');
// const Intern = require('../lib/Intern');
const index = require('../index');
// const Employee = require('../lib/Employee');
// let managerDiv = '';
// let engineerDiv = '';
// let internDiv = '';
let finalArray = [];


function basicHTML() { 
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="../dist/style.css">
    </head>
    <body>
        <header class='bg-pink-200'>
        <h2 class='text-white text-center'>My Team</h2>
        </header>
        <main id='employee-profiles'>
        ${finalArray.join('')}
        </main>
    </body>
    </html>`
};

function generateHTML (arr) {
    arr.forEach((employee) => {
        console.log(employee.getRole())
        switch(employee.getRole()){
            case 'Manager':
                managerCard(employee);
                break;
            case 'Engineer':
                engineerCard(employee);
                break;
            default:
                internCard(employee);
        }
    })
    return basicHTML();
}


//manager card
function managerCard(employee){
    let managerDiv = '';
    if (employee !== ""){
        managerDiv = `<div>
        <h4>${employee.name}</h4>
        <h5>Manager</h5>
            <div>
                <span>Id Number: ${employee.id}</span>
                <span>${employee.email}</span>
                <span>${employee.officeNumber}</span>
            </div>
        </div>`
    }
    //console.log(managerDiv);
    finalArray.push(managerDiv);
}

//engineer card
function engineerCard(employee){
    let engineerDiv = '';
    if (employee !== "") {
        engineerDiv = `<div>
        <h4>${employee.name}</h4>
        <h5>Engineer</h5>
            <div>
                <span>Id Number: ${employee.id}</span>
                <span>${employee.email}</span>
                <span>${employee.github}</span>
            </div>
        </div>`
    }
    //console.log(engineerDiv);
    finalArray.push(engineerDiv);
}

//intern card
function internCard(employee){
    let internDiv = '';
    if (employee !== "") {
    internDiv = `<div>
        <h4>${employee.name}</h4>
        <h5>Intern</h5>
            <div>
                <span>Id Number: ${employee.id}</span>
                <span>${employee.email}</span>
                <span>${employee.school}</span>
            </div>
        </div>`
    }
    //console.log(internDiv);
    finalArray.push(internDiv);
}

console.log(finalArray);

module.exports = generateHTML;