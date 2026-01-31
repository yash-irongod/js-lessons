// Event handler function for form submission
// The submit event fires when the form is submitted

// preventDefault() stops the browser's default behavior
// Default behavior of a form submit:
// - page reloads
// - form data is sent to a server

// Select the form element
const form = document.querySelector("#loginForm");

const handleSubmit = (event) => {
    event.preventDefault();

    // Access input values using their IDs
    const nameValue = document.querySelector("#name").value;
    const passwordValue = document.querySelector("#password").value;

    // Log values to the console (for learning/testing)
    console.log("Form Submitted");
    console.log("Name:", nameValue);
    console.log("Password:", passwordValue);
};


// Attach submit event listener to the form
form.addEventListener("submit", handleSubmit);
