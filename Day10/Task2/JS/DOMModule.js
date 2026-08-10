function displayEmployees(employeeArray) {
    let tbody = document.getElementById("tbody");

    tbody.innerHTML = "";

    employeeArray.forEach(function (emp, index) {
        tbody.innerHTML += `

        <tr>

            <td>${emp.Name}</td>

            <td>${emp.Age}</td>

            <td>${emp.Department}</td>

            <td>${emp.Salary}</td>

            <td>

                <button
                    class="deleteBtn"
                    data-index="${index}">

                    Delete

                </button>

            </td>

        </tr>

        `;
    });
}

function clearInputs() {
    document.getElementById("txtName").value = "";
    document.getElementById("txtAge").value = "";
    document.getElementById("txtSalary").value = "";
    document.getElementById("department").selectedIndex = 0;
}

function clearErrors() {
    document.getElementById("nameError").textContent = "";
    document.getElementById("ageError").textContent = "";
    document.getElementById("salaryError").textContent = "";
    document.getElementById("departmentError").textContent = "";
}

function showNameError(message) {
    document.getElementById("nameError").textContent = message;
}

function showAgeError(message) {
    document.getElementById("ageError").textContent = message;
}

function showSalaryError(message) {
    document.getElementById("salaryError").textContent = message;
}

function showDepartmentError(message) {
    document.getElementById("departmentError").textContent = message;
}

export { displayEmployees, clearInputs, clearErrors, showNameError, showAgeError, showSalaryError, showDepartmentError };
