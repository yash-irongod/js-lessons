/*
====================================================
CALL STACK + CALLBACK BASICS
====================================================

JavaScript uses a CALL STACK to manage function execution.

- Stack follows LIFO (Last In, First Out)
- When a function is called → pushed onto stack
- When it finishes → popped off the stack
*/


// -------------------------------------------------
// CALL STACK EXAMPLE
// -------------------------------------------------

// when the first function is called inside another function,
// it is pushed on top of the call stack
// once execution completes, it is removed from the stack

function firstFunction() {
    console.log("Inside first function");
}

function secondFunction() {
    console.log("Inside second function");
    firstFunction(); // firstFunction is pushed after secondFunction
}

secondFunction(); 
// Execution order:
// secondFunction → firstFunction → pop firstFunction → pop secondFunction


// -------------------------------------------------
// CALLBACK FUNCTION (BASICS)
// -------------------------------------------------

/*
Callback = a function passed as an argument
to another function and executed later.

Higher-order function = function that
accepts another function as an argument
*/

// Callback function
function print() {
    console.log("Hello World");
}

// Higher-order function
function greet(callback) {
    console.log("Greetings!");
    callback(); // executing the callback
}

greet(print);

/*
IMPORTANT:
greet(print)   ✅ correct → function reference passed
greet(print()) ❌ wrong → function executes immediately and
                          undefined is passed
*/