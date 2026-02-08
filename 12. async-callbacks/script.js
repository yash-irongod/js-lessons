/*
====================================================
ASYNCHRONOUS CALLBACKS & CALLBACK HELL
====================================================

- Asynchronous code does NOT block execution
- setTimeout() sends work to Web APIs
- Callback executes later via the Event Loop
*/


// -------------------------------------------------
// ASYNC CALLBACK EXAMPLE
// -------------------------------------------------

// Callback function
function info(name) {
    console.log("Hello !!", name);
}

// Higher-order function with async operation
function welcome(callback) {
    console.log("Greetings!");

    // setTimeout simulates async work (Web APIs)
    setTimeout(() => {
        console.log("Inside setTimeout");
        let firstName = "Yash";
        callback(firstName);
    }, 2000); // executes after 2 seconds
}

welcome(info);

/*
Execution flow:
1. "Greetings!" (sync)
2. After 2 sec → Inside setTimeout
3. Callback executes → Hello !! Yash
*/


// -------------------------------------------------
// CALLBACK HELL (PYRAMID OF DOOM)
// -------------------------------------------------

/*
Callback hell occurs when:
- Multiple async callbacks are nested
- Code grows to the right
- Readability & maintainability suffer
*/

console.log("Starting homework...");

setTimeout(() => {
    console.log("Homework done");
    console.log("Starting dinner...");

    setTimeout(() => {
        console.log("Dinner done");
        console.log("Getting ready to go out...");

        setTimeout(() => {
            console.log("Going to the playground!");
        }, 1000); // delay for going out

    }, 1500); // delay for dinner

}, 2000); // delay for homework


// -------------------------------------------------
// HANDLING CALLBACK HELL (NAMED FUNCTIONS)
// -------------------------------------------------

/*
Solution:
- Break nested callbacks into named functions
- Still uses callbacks
- Improves readability
- Still NOT ideal → leads to Promises
*/

function finishHomework(nextStep) {
    console.log("Starting homework...");
    setTimeout(() => {
        console.log("Homework done!");
        nextStep();
    }, 2000);
}

function eatDinner(nextStep) {
    console.log("Starting dinner...");
    setTimeout(() => {
        console.log("Dinner done");
        nextStep();
    }, 1500);
}

function goToPlayground() {
    console.log("Going to the playground!");
}

finishHomework(() => {
    eatDinner(() => {
        goToPlayground();
    });
});

/*
Still async + callbacks,
but structure is clearer than nested hell.
*/
