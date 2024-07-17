// Day 1: Variables and Data Types

// Activity 1 : Variable Declaration

// Task 1: Declare a variable using var, assign it a number and log the value to the console.

var number = 23;
console.log(number);

// Task 2: Declare a variable using let, assign it a string and log the value to the console.

let mYName = "himanshu";
console.log(mYName);


// Activity 2: Constant Declaration
// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const isAdult = true;
console.log(isAdult);

// Activity 3: Data Types
// Task 4: Create a variable of different data types(number, string, boolean, object, array) and log each variable's type using the typeof operator.

let number2 = 7;
console.log(typeof number2);

let newString = "hello world";
console.log(typeof newString);

const isTrue = true;
console.log(typeof isTrue);

let newObject = {
    name: "Michael Scott",
    age: 45
}
console.log(typeof newObject);

let newArray = [0, 1, 2, 3, 4]
console.log(typeof newArray);

// Activity 4: Reassigning Variable.
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let var1 = 43;
console.log(var1);

var1 = 34;
console.log(var1);

// Activity 5: Underatnding Const
// Task 6: Try reassingning a variable declared with const and observe the error.

const name2 = "Martin"
console.log(name2);

name2 = "Dustin"
console.log(name2);