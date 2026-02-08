// Select the button element using its id
const keypressButton = document.querySelector("#keypress");


// KEYDOWN EVENT
// Fires when a key is PRESSED down
// If the key is held, this event fires repeatedly
keypressButton.addEventListener("keydown", function (event) {
    console.log("Key down:", event.key);
});
// here, event.key gives the value of the key pressed (e.g. "a", "Enter", "Shift")


// KEYUP EVENT
// Fires when a key is RELEASED
// This event fires only once per key press and release
keypressButton.addEventListener("keyup", function (event) {
    console.log("Key up:", event.key);
});


// The same key appears TWO times in the console (UP+DOWN)
