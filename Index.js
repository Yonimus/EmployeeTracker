// Import and require inquirer & mysql
const inquirer = require('inquirer');
const mysql = require('mysql2');

// Database Connection
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );

function inital(){
  inquirer.prompt(
  [{
    name: 'navigator',
    type: 'list',
    message: 'Welcome.',
    choices: ['View all departments', 'View all roles','View all employees','Add role','Add department','Update employee role', 'Exit',]
  }])
    .then((answer)=>{
      if(answer.navigator === 'View all departments') 
      db.query('SELECT * FROM department', function( err, results){}
      )})
    }




//For viewing all departments
// View all roles; title/id/department/salary

// View all employees

// add a department; departmentname

// add a role; roleid / title / department / salary

// add an employee; employee name(last)(first)/title/salary/manager

// update employee; select employee/update role
// Import and require inquirer & mysql
