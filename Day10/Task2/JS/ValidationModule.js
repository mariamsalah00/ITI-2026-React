function validateName(name) {
    if (name.trim() === "") {
        return "Name is required.";
    }

    let pattern = /^[A-Za-z ]+$/;

    if (!pattern.test(name)) {
        return "Name must contain letters only.";
    }

    return "";
}

function validateAge(age) {
    age = Number(age);

    if (isNaN(age)) {
        return "Age must be a number.";
    }

    if (age < 25 || age > 60) {
        return "Age must be between 25 and 60.";
    }

    return "";
}

function validateSalary(salary) {
    salary = Number(salary);

    if (isNaN(salary) || salary <= 0) {
        return "Salary must be greater than 0.";
    }

    return "";
}

function validateDepartment(department) {
    if (department === "") {
        return "Please select a department.";
    }

    return "";
}

export { validateName, validateAge, validateSalary, validateDepartment };
