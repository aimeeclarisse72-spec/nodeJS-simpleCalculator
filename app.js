const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", (num1) => {
    rl.question("Enter operator (+,-,*,/): ", (operator) => {
        rl.question("Enter second number: ", (num2) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            let result;
            if (operator === "+") {
                result = num1 + num2;
            } else if (operator === "-") {
                result = num1 - num2;
            } else if (operator === "*") {
                result = num1 * num2;
            } else if (operator === "/") {
                result = num1 / num2;
            } else {
                console.log("Invalid operator");
                rl.close();
                return;
            }

            console.log("Result:", result);
            rl.close();
        });
    });
});