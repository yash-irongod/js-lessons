/*
=========================================================
EVENT LOOP – MICROTASK vs MACROTASK
=========================================================

This lesson explains:

1. Call Stack
2. Web APIs
3. Microtask Queue (Priority Queue)
4. Macrotask Queue (Callback Queue)
5. Event Loop

IMPORTANT RULE:
→ Microtasks always run BEFORE macrotasks
→ All microtasks are completed first
→ Then one macrotask runs
*/


// -----------------------------------------------------
// STEP 1 – Synchronous Code
// -----------------------------------------------------

console.log("First line");


// -----------------------------------------------------
// STEP 2 – setTimeout (Macrotask)
// -----------------------------------------------------

setTimeout(() => {
    console.log("Inside timeout");
}, 0);

/*
Even though delay = 0,
it DOES NOT run immediately.

setTimeout callback goes to:
→ Web APIs
→ Then Macrotask (Callback) Queue
*/


// -----------------------------------------------------
// STEP 3 – Promise (Microtask)
// -----------------------------------------------------

const p = new Promise((resolve, reject) => {
    resolve();   // Immediately resolved
});

p.then(() => {
    console.log("Inside promise");
}).catch(() => {
    console.log("Inside catch");
});

/*
Promise .then() callbacks go to:
→ Microtask Queue (Priority Queue)
*/


// -----------------------------------------------------
// STEP 4 – Second Promise (Another Microtask)
// -----------------------------------------------------

const p2 = new Promise((resolve, reject) => {
    resolve();
});

p2.then(() => {
    console.log("Inside second promise");
}).catch(() => {
    console.log("Inside catch");
});


console.log("Last line");


/*
=========================================================
NOW LET’S UNDERSTAND THE EXECUTION ORDER
=========================================================

Execution happens like this:

1️⃣ "First line" → printed (synchronous)

2️⃣ setTimeout registered → sent to Web APIs

3️⃣ Promise resolved → .then added to Microtask Queue

4️⃣ Second Promise resolved → .then added to Microtask Queue

5️⃣ "Last line" → printed (synchronous)

Now Call Stack is EMPTY.

Event Loop checks:

→ Are there Microtasks? YES
→ Execute ALL microtasks first

So output:

Inside promise
Inside second promise

After microtasks are finished:

→ Now execute one macrotask (setTimeout)

Inside timeout
*/


/*
=========================================================
FINAL OUTPUT ORDER:
=========================================================

First line
Last line
Inside promise
Inside second promise
Inside timeout
*/


/*
=========================================================
THEORY (Easy Language)
=========================================================

CALL STACK:
- Where JavaScript executes code
- Only one thing runs at a time (Single-threaded)

WEB APIs:
- Provided by browser
- Handles timers, fetch, DOM, etc.

MICROTASK QUEUE (Priority Queue):
- Used by Promises (.then, .catch)
- Has HIGHER priority
- Emptied completely before macrotasks run

MACROTASK QUEUE (Callback Queue):
- Used by setTimeout, setInterval, DOM events
- Lower priority than microtasks

EVENT LOOP:
- Continuously checks:
    1. Is Call Stack empty?
    2. If yes → run ALL microtasks
    3. Then run ONE macrotask
    4. Repeat


IMPORTANT:
Even if setTimeout has 0ms delay,
Promises will execute first.
*/


/*
Execution Context + Event Loop together
ensure JavaScript remains:
- Single-threaded
- Non-blocking
- Efficient
*/
