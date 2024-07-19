// Day 6: Arrays
// Tasks/Activities:
// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

const arr1 = [1, 2, 3, 4, 5]
console.log(arr1)

// Task 2: Access the first and last elements of the array and log them to the console.
console.log(arr1[0], arr1[arr1.length - 1])

// Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of an array and log the updated array.

let arr2 = [23, 45, 54, "history", true]
arr2.push("Maths", "Science")
console.log(arr2);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.

arr2.pop()
console.log(arr2);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.

arr2.shift()
console.log(arr2);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

arr2.unshift("yellow")
console.log(arr2);

// Activity 3: Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.

const arr3 = [1, 2, 5, 6, 9, 10]
let newArr3 = arr3.map((val) => val + val);
console.log(newArr3);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

let evenArr = arr3.filter((val) => val % 2 == 0)
console.log(evenArr);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
// Activity 4: Array Iteration

let sum = arr3.reduce((prev, curr) => prev = prev + curr, 0);
console.log(sum);

// Task 10: Use a for loop to iterate over the array and log each element to the console.

for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}
// Task 11: Use the forEach method to iterate over the array and log each element to the console.

arr3.forEach((element) => console.log(element))

// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

let twoDimArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(twoDimArr);

// Task 13: Access and log a specific element from the two-dimensional array.

console.log(twoDimArr[2][0], twoDimArr[1][1], twoDimArr[0][2]);