function runTasks() {
    // ================= Task 1 =================

    let nums = [10, 70, 25, 90, 40, 60, 15, 100, 55];

    console.log(
        "Ascending:",
        [...nums].sort((a, b) => a - b),
    );
    console.log(
        "Descending:",
        [...nums].sort((a, b) => b - a),
    );

    let filteredNums = nums.filter((value) => value > 50);
    console.log("Numbers > 50:", filteredNums);

    let maximum = Math.max(...nums);
    let minimum = Math.min(...nums);

    console.log("Maximum Number:", maximum);
    console.log("Minimum Number:", minimum);

    // ================= Task 2 =================

    const operation = (op, ...values) => {
        let answer;

        switch (op) {
            case "+":
                answer = 0;
                values.forEach((value) => (answer += value));
                break;

            case "-":
                answer = values[0];
                for (let i = 1; i < values.length; i++) {
                    answer -= values[i];
                }
                break;

            case "*":
                answer = 1;
                values.forEach((value) => (answer *= value));
                break;

            case "/":
                answer = values[0];

                for (let i = 1; i < values.length; i++) {
                    if (values[i] === 0) {
                        console.log("Can't divide by zero!");
                        return;
                    }

                    answer /= values[i];
                }

                break;

            default:
                console.log("Unknown Operator");
                return;
        }

        console.log(`Result of ${op} operation for ${values} is ${answer}`);
    };

    operation("+", 3, 1, 6, 3);
    operation("*", 2, 3, 4);
    operation("/", 100, 0, 5);

    // ================= Task 3 =================

    const project = {
        projectId: prompt("Enter Project ID"),
        projectName: prompt("Enter Project Name"),
        duration: prompt("Enter Project Duration"),

        printData() {
            console.log(`Project ID: ${this.projectId}`);
            console.log(`Project Name: ${this.projectName}`);
            console.log(`Duration: ${this.duration}`);
        },
    };

    project.printData();
}
