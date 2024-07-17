// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = 2;
if (num > 0) {
    console.log("Positive");
} if (num < 0) {
    console.log("Negitive");
} else {
    console.log("Equals to Zero");
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 20
if (age >= 18) {
    console.log('Eligible')
} else {
    console.log("Not Eligible");
}

// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 27,
    num2 = 20,
    num3 = 25;
if (num1 >= num2 && num1 >= num3) {
    console.log(`Num1 is the largest ${num1}`);
} else if (num2 >= num1 && num2 >= num3) {
    console.log(`Num2 is the largest ${num2}`);
} else
    console.log(`Num3 is the largest ${num3}`);

// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = 5
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Wrong Input");
        break;
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let score = 66
switch (true) {
    case (score >= 90 && score <= 100):
        console.log("A");
        break;
    case (score >= 70 && score <= 90):
        console.log("B");
        break;
    case (score >= 60 && score <= 70):
        console.log("C");
        break;
    case (score >= 40 && score <= 60):
        console.log("D");
        break;

    default:
        console.log("F");
        break;
}

// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let isEven = 45
isEven % 2 == 0 ? console.log("Even") : console.log("Odd ");

// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2024;
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}
