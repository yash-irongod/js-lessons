// ==========================================
// GENERATORS IN JAVASCRIPT
// ==========================================

// A generator is a special type of function
// It can pause execution and resume later.
// It uses:
// - function*  (star symbol)
// - yield keyword
// - .next() method

// Generator function
function* generateNumbers() {
    let i = 1;

    while (true) {
        yield i;  // pause and return value
        i++;      // resume from here next time
    }
}

// Create generator object
const gen = generateNumbers();

// Each .next() resumes execution
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }

// ------------------------------------------
// How it works:
// 1. Calling generateNumbers() does NOT execute it immediately.
// 2. It returns a generator object.
// 3. .next() starts execution until it hits first yield.
// 4. Each next() resumes from last paused position.

// done: false → means generator not finished
// If generator finishes, done becomes true.

// Real-world analogy:
// Netflix "Next Episode" — resume from where you stopped.


// ==========================================
// CURRYING IN JAVASCRIPT
// ==========================================

// Currying means:
// Converting a function with multiple arguments
// into a sequence of nested functions
// each taking ONE argument.

// Normal function
function addNormal(a, b, c) {
    return a + b + c;
}

console.log(addNormal(1, 2, 3)); // 6


// Curried version
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

// Step-by-step execution
const first = add(1);     // returns function(b)
const second = first(2);  // returns function(c)
const third = second(3);  // returns final value

console.log(third); // 6


// ==========================================
// Practical Example of Currying
// ==========================================

// Real-world use case: reusable discount calculator

const discount = rate => price => price - price * rate;

const tenPercentOff = discount(0.10);

console.log(tenPercentOff(100)); // 90


// Why currying is useful:
// - Reusable functions
// - Functional programming
// - Cleaner abstraction
// - Partial application