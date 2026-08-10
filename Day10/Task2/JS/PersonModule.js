class Person {
    constructor(name, age) {
        if (this.constructor.name === "Person") {
            throw new Error("Person is an abstract class.");
        }

        this.Name = name;
        this.Age = age;
    }

    toString() {
        return `Name: ${this.Name}, Age: ${this.Age}`;
    }
}

export { Person };
