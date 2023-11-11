
//Import inquirer and mysql
const inquirer = require('inquirer');
const mysql = require('mysql2');


// Connect to employee_db database
const db = mysql.createConnection(
    {
        host: 'localhost',

        user: 'root',

        password: 'rootroot',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);


const toDoQuestion = [
    {
        type: 'list',
        name: 'init',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
        message: 'What would you like to do?',
    }]

const addDepartment = [
    {
        type: 'input',
        name: 'add-department',
        message: 'What is the name of the department?',
    }]

const addRole = [
    {
        type: 'input',
        name: 'add-role',
        message: 'What is the name of the role?',
    }]

const salary = [
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary of the role?',
    }]


const promptUser = async () => {
    try {

        const userResponseObj = await inquirer.prompt(toDoQuestion);
        console.log('Welcome to employee tracker');

        if (userResponseObj.init === 'View All Employees') {
            db.query('SELECT * FROM employee', (err, data) => {
                console.table(data)
                promptUser(userResponseObj)
            })
        }
        else if (userResponseObj.init === 'Add Employee') {
            db.query('SELECT id FROM employee', (err, data) => {
                console.table(data)
                promptUser(userResponseObj)
            })
        }
        else if (userResponseObj.init === 'Update Employee Role') {
            db.query('SELECT * FROM role', (err, data) => {
                console.table(data)
                promptUser(userResponseObj)
            })
        }
        else if (userResponseObj.init === 'View All Roles') {
            db.query('SELECT * FROM role', (err, data) => {
                console.table(data)
                promptUser(userResponseObj)
            })
        }
        else if (userResponseObj.init === 'Add Role') {
            db.query('SELECT * FROM role', (err, data) => {
                console.table(data)
                promptUser(userResponseObj)
            })
        }
        else if (userResponseObj.init === 'View All Departments') {
            db.query('SELECT * FROM department', (err, data) => {
                console.table(data)
                promptUser(userResponseObj)
            })
        }
        else if (userResponseObj.init === 'Add Department') {
            db.query('SELECT * FROM department', (err, data) => {
                console.table(data)
                promptUser(userResponseObj)
            })
        }



    } catch (err) {
        console.log(err);
    }

};

promptUser();



