import Employee from "./EmployeeModule.js";

import { validateName, validateAge, validateSalary, validateDepartment } from "./ValidationModule.js";

import { displayEmployees, clearInputs, clearErrors, showNameError, showAgeError, showSalaryError, showDepartmentError } from "./DOMModule.js";

let Employees = [];

const btnAdd = document.getElementById("btnAdd");
const tbody = document.getElementById("tbody");
const sortSelect = document.getElementById("sortSelect");
const filterSelect = document.getElementById("filterSelect");

// Add Employee

btnAdd.addEventListener("click", function () {
    clearErrors();

    let name = document.getElementById("txtName").value;
    let age = document.getElementById("txtAge").value;
    let salary = document.getElementById("txtSalary").value;
    let department = document.getElementById("department").value;

    let valid = true;

    let nameError = validateName(name);

    if (nameError != "") {
        showNameError(nameError);
        valid = false;
    }

    let ageError = validateAge(age);

    if (ageError != "") {
        showAgeError(ageError);
        valid = false;
    }

    let salaryError = validateSalary(salary);

    if (salaryError != "") {
        showSalaryError(salaryError);
        valid = false;
    }

    let departmentError = validateDepartment(department);

    if (departmentError != "") {
        showDepartmentError(departmentError);
        valid = false;
    }

    if (!valid) return;

    let emp = new Employee(name, Number(age), Number(salary), department);

    Employees.push(emp);

    displayEmployees(Employees);

    clearInputs();
});

// Delete Employee

tbody.addEventListener("click", function (e) {
    if (e.target.classList.contains("deleteBtn")) {
        let index = e.target.dataset.index;

        Employees.splice(index, 1);

        displayEmployees(Employees);
    }
});

// Sort

sortSelect.addEventListener("change", function () {
    if (this.value == "Name") {
        Employees.sort((a, b) => a.Name.localeCompare(b.Name));
    } else if (this.value == "Department") {
        Employees.sort((a, b) => a.Department.localeCompare(b.Department));
    }

    displayEmployees(Employees);
});

// Filter

filterSelect.addEventListener("change", function () {
    if (this.value == "All") {
        displayEmployees(Employees);
    } else {
        let filtered = Employees.filter(function (emp) {
            return emp.Department == filterSelect.value;
        });

        displayEmployees(filtered);
    }
});
