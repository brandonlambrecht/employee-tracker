
//Import inquirer and mysql
const inquirer = require('inquirer');
const mysql = require('mysql2');


// Connect to employee_db database
const db = mysql.createConnection(
    {
        host: 'localhost',

        user: 'brandonjlambrecht@gmail.com',

        password: 'rootroot',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);


const questionArr = [
    {
        type: 'list ',
        name: 'init',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
        message: 'What would you like to do?',
    },
    {
        type: 'input',
        name: 'department',
        message: 'What is the name of the department?',
    },
    {
        type: 'input',
        name: 'role',
        message: 'What is the name of the role?',
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary of the role?',
    },
    {
        type: 'list',
        name: 'department-role',
        choices: ['Engineering', 'Finance', 'Legal', 'Sales', 'Service'],
        message: 'Which department does the role belong to?',
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'GPL', 'APACHE', 'BSD', 'NONE'],
        message: 'What kind of license should your project have?',
    },
    {
        type: 'input',
        name: 'install',
        default: 'npm i',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'test',
        default: 'npm test',
        message: 'What command should be run to run test?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What does user need to know about contributing to repo?',
    },
];

const promptUser = async () => {
    try {

        const userResponseObj = await inquirer.prompt(questionArr);
        console.log(onsole.log('Welcome to employee tracker'));

        promptUser(userResponseObj)
    } catch (err) {
        console.log(err);
    }

};



