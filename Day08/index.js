// Constructor Function
function Employee(name, age, department, salary) {
    this.Name = name;
    this.Age = Number(age);
    this.Department = department;

    // Private Salary
    var S = Number(salary);

    // Setter
    this.setSalary = function (value) {
        if (value >= 0) {
            S = Number(value);
        }
    };

    // Getter
    this.getSalary = function () {
        return S;
    };

    // toString
    this.toString = function () {
        return "Name : " + this.Name + "\nAge : " + this.Age + "\nDepartment : " + this.Department + "\nSalary : " + this.getSalary();
    };
}
// Take Employees From User

var size = Number(prompt("Enter Number Of Employees"));

var EmployeesArray = [];

for (var i = 0; i < size; i++) {
    var data = prompt("Enter Employee Data\nExample:\nMona,25,SD,2000");

    var arr = data.split(",");

    var emp = new Employee(arr[0].trim(), arr[1].trim(), arr[2].trim(), arr[3].trim());

    EmployeesArray.push(emp);
}

// Display Employees
console.log("Employees");

EmployeesArray.forEach(function (emp) {
    console.log(emp.toString());
});

// Sort
// Department Ascending
// Salary Descending

EmployeesArray.sort(function (a, b) {
    if (a.Department < b.Department) return -1;

    if (a.Department > b.Department) return 1;

    return b.getSalary() - a.getSalary();
});

console.log("After Sorting");

EmployeesArray.forEach(function (emp) {
    console.log(emp.toString());
});

// Filter Salary > 2000


var FilterEmployees = EmployeesArray.filter(function (emp) {
    return emp.getSalary() > 2000;
});

console.log("Employees Salary > 2000");

FilterEmployees.forEach(function (emp) {
    console.log(emp.toString());
});

// Total Salary
var totalSalary = EmployeesArray.reduce(function (sum, emp) {
    return sum + emp.getSalary();
}, 0);

var averageSalary = totalSalary / EmployeesArray.length;

alert("Total Salary = " + totalSalary + "\nAverage Salary = " + averageSalary);
// Highest Salary In Each Department

var HighestDepartments = {};

EmployeesArray.forEach(function (emp) {
    if (HighestDepartments[emp.Department] == undefined || emp.getSalary() > HighestDepartments[emp.Department].getSalary()) {
        HighestDepartments[emp.Department] = emp;
    }
});

console.log("Highest Salary In Each Department");

for (var dept in HighestDepartments) {
    console.log(dept + " -> " + HighestDepartments[dept].Name + " : " + HighestDepartments[dept].getSalary());
}
