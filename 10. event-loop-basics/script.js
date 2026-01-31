/*
================================================
QUESTION:
Start with a variable = 1,
increment it every second,
and stop printing after it reaches 10.
================================================
*/


let count = 1;

// setInterval executes the callback repeatedly after every given delay
// This interval runs every 1000 ms (1 second)
const countIntervalId = setInterval(() => {
    console.log(count);
    count++;

    // Stop the interval when count exceeds 10
    if (count > 10) {
        clearInterval(countIntervalId);
    }
}, 1000);


/*
IMPORTANT NOTE:
Even though setInterval is written at the top,
its callback does NOT run immediately.

Reason:
- JavaScript is single-threaded
- setInterval callback is sent to Web APIs
- It comes back to the Call Stack ONLY when the stack is empty
*/


// ---------------------------------------------
console.log("First Line");


// setTimeout with 0 ms delay
// Even with 0 delay, it runs AFTER synchronous code
setTimeout(() => {
    console.log("After 0 seconds");
}, 0);


console.log("Second Line");


/*
OUTPUT ORDER:

First Line
Second Line
After 0 seconds
1
2
3
...
10

WHY?
- Synchronous code runs first
- Timers wait in Web APIs
- Callbacks execute only after call stack is empty
*/


/*
================================================
HANDLING ASYNCHRONOUS CODE IN JAVASCRIPT
================================================

There are three main approaches:

1. Callback-based approach
   - Can lead to callback hell (nested callbacks)

2. Promises
   - Cleaner and more manageable
   - Uses .then() and .catch()

3. Async / Await
   - Built on top of promises
   - Looks synchronous but works asynchronously
*/