// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const collectEmployees = function() {
  let employees = [];
  let addEmployee = true;

  while(addEmployee) {
      let firstName = prompt("Enter employee's first name:");
      let lastName = prompt("Enter employee's last name:");
      let salaryInput = prompt("Enter employee's salary:");
      let salary = !isNaN(parseFloat(salaryInput)) ? parseFloat(salaryInput) : 0;

      employees.push({ firstName, lastName, salary });

      addEmployee = confirm("Would you like to add another employee?");
  }

  return employees;
};
  // TODO: Get user input to create and return an array of employee objects

// Display the average salary
const displayAverageSalary = function(employees) {
  let totalSalary = 0;
  for (let employee of employees) {
      totalSalary += employee.salary;
  }
  const averageSalary = totalSalary / employees.length;
  console.log(`Average Salary: $${averageSalary.toFixed(2)} for ${employees.length} employees`);
};
  // TODO: Calculate and display the average salary

// Select a random employee
function getRandomEmployee(employees) {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];
  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
}

  // TODO: Calculate and display the average salary

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
