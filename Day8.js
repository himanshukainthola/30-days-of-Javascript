// Tasks/Activities:
// Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

let name = "charlie";
let age = 45;
console.log(`the name is ${name} and age is ${age}`);

// Task 2: Create a multi-line string using template literals and log it to the console.
const multiLineString = `
This is a multi-line
string created using
template literals.
`;

console.log(multiLineString);

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let array = [1, 2, 3, 4, 5]
let [first, second] = array
console.log(first, second);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const book = {
    title: "Think & Grow Rich",
    year: 1937,
    author: "Napoleon Hill "
};

let { title, author } = book;
console.log(`title is ${title} and author is ${author}`);

// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

newArr = [...array, 5, 4, 3, 2, 1]
console.log(newArr);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...args) {
    return args.reduce((acc, val) => acc + val)
}

const result = sum(1, 2, 3, 4, 5)
console.log(result);

// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function product(num1, num2 = 1) {
    return num1 * num2
}

console.log(product(4, 5));
console.log(product(1));


// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const newObj = {
    prop1: "val1",
    prop2: "val2",
    fun1() {
        console.log("this is funtion method ");
    }
}
console.log(newObj);

// Task 9: Create an object with computed property names based on variables and log the object to the console.

let property = "key";
let value = "value";

const myobj = {
    [property]: value
};
console.log(myobj);