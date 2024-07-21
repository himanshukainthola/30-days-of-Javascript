// ACTIVITY ONE : Object Creation & Access

// Task 1 : Create an object representing a book with properties like title , year , author & log it to the console

const book = {
    title: "Think & Grow Rich",
    year: 1937,
    author: "Napoleon Hill "
}

console.log(book);

// Task 2 : Access the title & author property of book & log it to the console

const title = book.title,
    author = book.author;
console.log(title, author);
// ACTIVITY TWO : Object Methods

// Task 3 : Add a method to the book that returns a string with the book's title & author & log the result of calling method

book.getDetail = function () {
    return `${this.title} by ${this.author}`
}

console.log(book.getDetail());

// Task 4 : Add a method to the book object that takes the `year` parameter & updates the book year property , then log the updated object

book.update = function (newYear) {
    this.year = newYear;
    return this.year
}

console.log(book.update(1997));

// ACTIVITY THREE : Nested Objects

// Task 5 : Create a nested object representing a library with properties like name & books [ array of books object ] etc & log it to the console

const library = {
    name: "My Library",
    books: [
        {
            title: "Book 1",
            author: "Author 1",
            pages: 200
        },
        {
            title: "Book 2",
            author: "Author 2",
            pages: 150
        },
        {
            title: "Book 3",
            author: "Author 3",
            pages: 300
        }
    ]
};

console.log(library);

// Task 6 : Access & log the name of the library & titles of all the books in the library
console.log("library:", library.name);

library.books.forEach(books => {
    console.log("Book Title:", books.title);
});

// ACTIVITY FOUR : The `this` keyword

// Task 7 : Add the method to the book that uses `this` keyword to return a string with books title & year , & log the result
book.display = function () {
    return `title ${this.title} and year ${this.year}`
}
console.log(book.display());


// ACTIVITY FIVE : Object Iteration

// Task 8 : Use a `for..in` loop to iterate over the properties of book object & log each property & its value
for (let property in book) {
    console.log("-------------------------------------------")
    console.log(property + ":", book[property]);
}


// Task 9 : Use `Object.keys` & `Object.values` method to log all the keys & value of the book object


const keys = Object.keys(book);
const values = Object.values(book);

keys.forEach((key, index) => {
    console.log(key + ":", values[index]);
});

