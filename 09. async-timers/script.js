/*
========================================
SYNCHRONOUS vs ASYNCHRONOUS JAVASCRIPT
========================================

JavaScript is SINGLE-THREADED:
- It can execute only ONE task at a time
- By default, it runs code SYNCHRONOUSLY
  (each line waits for the previous line to finish)

Asynchronous programming allows:
- Time-based tasks
- Background execution
- Non-blocking behavior
*/


// ------------------------------
// setTimeout()
// ------------------------------
// setTimeout executes a function AFTER a specified delay (in milliseconds)
// It does NOT block the execution of the next lines

setTimeout(() => {
    console.log("After 2 seconds");
}, 2000); // 2000 ms = 2 seconds


console.log("First Line");


// Another timeout example
setTimeout(() => {
    alert("After 3 seconds !!");
}, 3 * 1000); // 3000 ms = 3 seconds


console.log("Second Line");


/*
Execution order in console:
1. "First Line"
2. "Second Line"
3. "After 2 seconds"
4. Alert after 3 seconds

Reason:
- setTimeout callbacks are sent to the Web APIs
- Main thread continues execution
*/


// ------------------------------
// setInterval()
// ------------------------------
// setInterval repeatedly executes a function
// at a fixed time interval (in milliseconds)

const intervalId = setInterval(() => {
    console.log("Hello every 2 seconds");
}, 2000);


// clearInterval()
// Stops the setInterval from executing further
// clearInterval(intervalId);


// Stop the interval after 10 seconds
// (2 sec interval → runs 5 times)
setTimeout(() => {
    clearInterval(intervalId);
}, 10 * 1000);


// ------------------------------
// clearTimeout()
// ------------------------------
// clearTimeout stops a timeout BEFORE it executes

const timeoutId = setTimeout(() => {
    console.log("This will not be printed");
}, 5000);


// Timeout is cleared immediately
// So the above console.log never runs
clearTimeout(timeoutId);


/*
========================================
IMPORTANT CONCEPTS TO REMEMBER
========================================

- setTimeout → runs ONCE after delay
- setInterval → runs REPEATEDLY after delay
- clearTimeout → cancels setTimeout
- clearInterval → cancels setInterval

Timers are asynchronous:
- They run after the call stack is empty
- Managed by the browser (Web APIs)
*/
