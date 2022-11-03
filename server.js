const inquirer = require("inquirer");
const express = require("express");
const mysql = require("mysql2");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'password',
      database: 'homework_db'
    },
    console.log(`Connected to the homework_db database.`)
  );
  
function start() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "questionOne",
        message: "What would you like to do?",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
          "QUIT",
        ],
      },
    ])
    .then((ans) => {
      switch (ans.questionOne) {
        case "view all departments":
          db.query("SELECT * FROM departments", (err, data) => {
            if (err) {
              throw err;
            } else {
              console.table(data);
            }
          });
          start();
          break;

        case "view all roles":
          db.query("SELECT * FROM roles", (err, data) => {
            if (err) {
              throw err;
            } else {
              console.table(data);
            }
          });
          start();
          break;

        case "view all employees":
          db.query("SELECT * FROM employees", (err, data) => {
            if (err) {
              throw err;
            } else {
              console.table(data);
            }
          });
          start();
          break;

          case "add a department":

        // case "add a department":
        //   department();
        //   break;

        // case "add a role":
        //   role();
        //   break;

        // case "add an employee":
        //   employee();
        //   break;

        // case "update an employee role":
        //   addRole();
        //   break;

        case "QUIT":
          break;
      }
    });
}

// const viewDepartments() THESE ALL MUST BE CONNECTED TO THE SQL FILES SOMEHOW
// const viewRoles()
// const viewEmployees()
// const updateEmployee

const department = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "getDepartmentName",
        message: "Enter the new department name:",
      },
    // ]).then(ans => {
    //     const departmentAnswer = new departmentAnswer(ans.getDepartmentName)
    // })
      {
        type: "list",
        name: "keepGoing",
        message: "What would you like to do now?",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
          "QUIT",
        ],
      },
    ])
    .then((ans) => {
      switch (ans.keepGoing) {
        case "view all departments":
          viewDepartments();
          break;

        case "view all roles":
          viewRoles();
          break;

        case "view all employees":
          db.query("SELECT * FROM employee", (err, data) => {
            if (err) {
              throw err;
            } else {
              console.table(data);
            }
          });
          start();
          break;

        case "add a department":
          department();
          break;

        case "add a role":
          role();
          break;

        case "add an employee":
          employee();
          break;

        case "update an employee role":
          updateRole();
          break;

        case "QUIT":
          break;
      }
    });
};

const role = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "getRoleName",
        message: "Enter the name of this new role:",
      },
      {
        type: "input",
        name: "getRoleSalary",
        message: "Enter the salary of this new role:",
      },
      {
        type: "input",
        name: "getRoleDepartment",
        message:
          "Enter the department of this new role (must choose from an existing department):",
      },
      {
        type: "list",
        name: "keepGoing",
        message: "What would you like to do now?",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
          "QUIT",
        ],
      },
    ])
    .then((ans) => {
      switch (ans.keepGoing) {
        case "view all departments":
          viewDepartments();
          break;

        case "view all roles":
          viewRoles();
          break;

        case "view all employees":
          viewEmployees();
          break;

        case "add a department":
          department();
          break;

        case "add a role":
          role();
          break;

        case "add an employee":
          employee();
          break;

        case "update an employee role":
          updateRole();
          break;

        case "QUIT":
          break;
      }
    });
};

const employee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "getEmployeeFirstName",
        message: "Enter the first name of this new employee:",
      },
      {
        type: "input",
        name: "getEmployeeLastName",
        message: "Enter the last name of this new employee:",
      },
      {
        type: "input",
        name: "getEmployeeRole",
        message:
          "Enter the role of this new employee (must be an existing role):",
      },
      {
        type: "input",
        name: "getEmployeeManager",
        message: "Enter this new employees manager:",
      },
      {
        type: "list",
        name: "keepGoing",
        message: "What would you like to do now?",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
          "QUIT",
        ],
      },
    ])
    .then((ans) => {
      switch (ans.keepGoing) {
        case "view all departments":
          viewDepartments();
          break;

        case "view all roles":
          viewRoles();
          break;

        case "view all employees":
          viewEmployees();
          break;

        case "add a department":
          department();
          break;

        case "add a role":
          role();
          break;

        case "add an employee":
          employee();
          break;

        case "update an employee role":
          updateRole();
          break;

        case "QUIT":
          break;
      }
    });
};

// app.get('/api/departments', (req, res) => {
//     db.query('SELECT * FROM departments', function (err, results) {
//         console.log(results)
//         res.json(results)
//     })
// });

// app.get('/api/roles', (req, res) => {
//     db.query('SELECT * FROM roles', function (err, results) {
//         console.log(results)
//         res.json(results)
//     })
// });

// app.get('/api/employees', (req,res) => {
//     db.query('SELECT * FROM employees', function (err, results) {
//         console.log(results)
//         res.json(results)
//     })
// });

start();

app.listen(PORT, () => {
  console.log(`listenin on port ${PORT}`);
});
