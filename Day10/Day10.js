// Activity-1: Basic Event Handling:

// Task-1: Add a click event listener to a button that changes the text content of a paragraph.
const button = document.querySelector("#button1")
button.addEventListener("click", () => {
    document.querySelector(".para1").textContent = "new content here"
})


// Task-2: Add a double-click event listener to an image that toggles its visibility.
const img = document.querySelector("#img1")
img.addEventListener("dblclick", () => {
    img.classList.toggle("hide");
})

// Activity-2: Mouse Events:

// Task-3: Add a mouseover event listener to an element that changes its background color.
const element1 = document.querySelector(".element1")
element1.addEventListener("mouseover", () => {
    element1.style.backgroundColor = "red";
})

// Task-4: Add a mouseout event listener to an element that resets its background color.

element1.addEventListener("mouseout", () => {
    element1.style.backgroundColor = "blue";
})

// Activity-3: Keyboard Events:

// Task-5: Add a keydown event listener to an input field that logs the key pressed to the console.

const input = document.querySelector(".input")
input.addEventListener("keydown", (e) => {
    console.log(e.key)
})

// Task-6: Add a keyup event listener to an input field that displays the current value in the paragraph.

const para2 = document.querySelector(".para2")
const input2 = document.querySelector(".input2")
input2.addEventListener("keyup", (e) => {
    para2.innerHTML = input2.value;
})


// Activity-4: Form Events:

// Task-7: Add a submit event listener to a form that represents the default submission and logs the form data to the console.
const form = document.querySelector("#newForm")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(`Username is ${form.elements.username.value}`);
    console.log(`email is ${form.elements.email.value}`);
    console.log(`password is ${form.elements.password.value}`);


})

// Task-8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

const selectPara = document.getElementById("selectPara");
const tags = document.getElementById("tags");

tags.addEventListener("change", () => {
    selectPara.innerHTML = tags.value;
});

// Activity-5: Event Delegation:

// Task-9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const list = document.querySelector("#newList")
tags.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
        console.log(e.target.textContent);
    }
})

// Task-10: Add an event listener to a parent element that listens for events from dynamically added child elements

const parent = document.getElementById("parent");
const addButtons = document.getElementById("addButtons");
parent.addEventListener("click", (e) => {
    e.target.tagName == "BUTTON" && alert("Button Clicked");
});
addButtons.addEventListener("click", () => {
    const newButton = document.createElement("button");
    newButton.textContent = "New Button";
    document.getElementById("parent").appendChild(newButton);
});