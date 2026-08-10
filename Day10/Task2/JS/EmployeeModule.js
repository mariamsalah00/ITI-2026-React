import { Person } from "./PersonModule.js";

class Employee extends Person {
    #salary = 0;

    constructor(name, age, salary, department) {
        super(name, age);

        this.Department = department;
        this.Salary = salary;
    }

    set Salary(value) {
        if (value > 0) {
            this.#salary = value;
        }
    }

    get Salary() {
        return this.#salary;
    }

    print() {
        return `
        Name : ${this.Name}
        Age : ${this.Age}
        Salary : ${this.Salary}
        Department : ${this.Department}
        `;
    }

    toString() {
        return `${super.toString()}, Department: ${this.Department}, Salary: ${this.Salary}`;
    }
}

export default Employee;
