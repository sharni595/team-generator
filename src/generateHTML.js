

let basicHTML = 
`<head>
<body>`

function generateHTML (arr) {
    arr.forEach((employee) => {
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
    return //complete html
}

function managerCard(employee){

}

module.exports = generateHTML();