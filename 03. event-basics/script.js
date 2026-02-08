// Selects the FIRST <button> element from the document
// querySelector() returns only one element
const button = document.querySelector("button");


// Event handler function
// This function runs when the event occurs
function message(event) {
    console.log(event);
    alert("You have Activated the button");
}


// Attach a click event listener to the button
// The function 'message' will run when the button is clicked
button.addEventListener("click", message);


// Alternative event :
// 'mouseover' triggers when the mouse pointer hovers over the button
// button.addEventListener("mouseover", message);


// REMOVE event listener :
// This stops the 'message' function from running on click
// button.removeEventListener("click", message);
