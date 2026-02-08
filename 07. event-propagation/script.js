/*
EVENT PROPAGATION THEORY (VERY IMPORTANT):

When an event occurs on an element, it goes through 3 phases:

1. Capturing Phase (TOP → DOWN)
Event travels from the outermost parent → target element

2. Target Phase
Event reaches the actual element that was clicked

3. Bubbling Phase (BOTTOM → UP)
Event bubbles up from target → outer parents

By default:
addEventListener uses BUBBLING phase (false),
*/



// Select elements
const button = document.querySelector("button");
const containerDiv = document.querySelector(".container");
const outerDiv = document.querySelector(".outer");

// ---- EVENT LISTENERS (BUBBLING PHASE) ----
// false = bubbling (default behavior)
// true = capturing



// Target element
button.addEventListener(
    "click",
    function () {
        console.log("Button clicked");
    },
    true
);

// Parent container
containerDiv.addEventListener(
    "click",
    function () {
        console.log("Container div clicked");
    },
    true
);

// Outer most parent
outerDiv.addEventListener(
    "click",
    function () {
        console.log("Outer div clicked");
    },
    true
);


/*
EXPECTED OUTPUT IF FALSE(BUBBLING):

When button is clicked, console logs:
1. Button clicked
2. Container div clicked
3. Outer div clicked

Reason:
Event starts at TARGET (button) and bubbles UP to parents
*/
