// DOM Manupulation

// Activity-1: Selecting and Manipulating elements:

// Task-1: Select an HMTL element by its ID and change its text content.

const element1 = document.querySelector("#message")
element1.textContent = "hello World!"

// Task-2: Select an HTML element by its class and change its background color.
const element2 = document.querySelector(".greetings")
element2.style.backgroundColor = "blue"

// Activity-2: Creating and Appending elements:

// Task-3: Create a new "div" element with some text content and append it to body.
const body = document.querySelector("body")
const newElement = document.createElement("div");
newElement.innerHTML = "<p> this is new element </p>"
body.appendChild(newElement)

// Task-4: Create a new "li" element and add it to existing "ul" list.
let newLi = document.createElement("li")
newLi.innerHTML = "<h2>5</h2>"
document.querySelector(".newList").appendChild(newLi)

// Activity-3: Removing Elements:

// Task-5: Select and HTML element and remove it from the DOM.

element1.remove()

// Task-6: Remove the last child of a specific HTML element.

newLi.lastChild.remove()


// Activity-4: Modifying Attributes and Classes:

// Task-7: Select and HTML element and change one of its attributes (e.g. "src" of an "img" tag).
const img = document.querySelector("img")
img.setAttribute("src", "https://images.unsplash.com/photo-1721587352217-ecc89e9a0d81?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
img.setAttribute("alt", "image of clouds over mountain");

// Task-8: Add and remove a CSS class to/from an HTML element.
const newClass = document.querySelector(".newList");
newClass.classList.add("newElement")

// Activity-5: Event Handling:

// Task-9: Add a click event listener to a button that changes the text content of a paragraph.
const button = document.querySelector(".button")
button.addEventListener("click", () => {
    document.querySelector(".para").textContent = "this is changed paragraph";
})


// Task-10: Add a mouseover event listener to an element that changes its border color.
img.addEventListener("mouseover", () => {
    img.style.borderColor = "red"
})