// Day 5: Functions
// Tasks/Activities:
// Activity 1: Function Declaration
function newFunction(Parameters) {
    //     (funtion Body)
}
// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(isEvenOrOdd(35))
// Task 2: Write a function to calculate the square of a number and return the result.

function square(num) {
    return num * num
}

console.log(square(4));

// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

function isMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(isMax(5, 8));

// Task 4: Write a function expression to concatenate two strings and return the result.

function concat(str1, str2) {
    return str1 + str2;
}

let final = concat("Hello", "JavaScript")
console.log(final);

// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

let sum = (num1, num2) => num1 + num2;
console.log(sum(5, 5));

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

let isPresent = (str, char) => str.includes(char);
console.log(isPresent("javaScript", "S"));

// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

let product = (num1, num2 = 5) => num1 * num2;
console.log(product(4, 2))
console.log(product(4))

// Task 8: Write a function that takes a person’s name and age and returns a greeting message. Provide a default value for the age.

function greet(name, age = 18) {
    return `hello ${name}! and your age is${age}`;
}

console.log(greet("richard", 24));

// Activity 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function repeatFunction(fn, times) {
    return function () {
        for (let i = 0; i < times; i++) {
            fn();
        }
    };
}

const sayHello = () => console.log('Hello!');
const repeatSayHello = repeatFunction(sayHello, 3);


// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function twoValue(fn1, fn2, val) {
    return (fn2(fn1(val)))
}

const double = (x) => x * 2;
const square2 = (x) => x * x;

const result = twoValue(double, square, 4);
console.log(result);