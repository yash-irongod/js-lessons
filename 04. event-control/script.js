// Select buttons using their unique IDs
const Button = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const restartButton = document.querySelector("#restart");


// Event handler function- "message"
function message(event) {
    console.log(event); // logs event details for learning/debugging
    alert("You have clicked the button");
}

// Attach click event "message" to startButton
Button.addEventListener("click", message);

// Remove the click event "message" from startButton
stopButton.addEventListener("click", function () {
    Button.removeEventListener("click", message);
});

// Re-attach the click event to startButton
restartButton.addEventListener("click", function () {
    Button.addEventListener("click", message);
});


// IMPORTANT NOTES:
// - addEventListener attaches behavior
// - removeEventListener removes behavior
// removeEventListener works only with the exact same function reference,
// which is why the handler 'message' is defined separately and reused
