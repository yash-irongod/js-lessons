/*
==============================
EXECUTION CONTEXT THEORY
==============================

Execution Context = Environment where JavaScript code runs.

Each execution context has TWO phases:

1. Memory Creation Phase (Hoisting Phase)
   - Memory is allocated
   - Variables & functions are registered
   - No code is executed

2. Code Execution Phase
   - Code runs line by line
   - Values are assigned
   - Functions are executed

Types of Execution Context:
- Global Execution Context (GEC)
- Function Execution Context (FEC)
*/


// Use debugger to pause execution and inspect phases
// Open DevTools → Sources → Scope / Call Stack
debugger;


// ------------------------------
// MEMORY CREATION PHASE (GEC)
// ------------------------------
// var a → initialized as undefined
// let b → created but in TDZ (not initialized)

console.log(a); // undefined (var is hoisted)
// console.log(b); // ❌ ReferenceError (b is in TDZ)

var a = 78;     // assigned during execution phase, part of global scope
let b = 345;    // initialized here (TDZ ends) //stored in script scope


// ------------------------------
// CODE EXECUTION PHASE
// ------------------------------
console.log(a); // 78
console.log(b); // 345


// ------------------------------
// FUNCTION EXECUTION CONTEXT
// ------------------------------
function print() {
    // New Function Execution Context (FEC) is created

    let c = 45;     // local to function
    console.log(c);
    console.log("Inside function");

    // After function ends → FEC is destroyed (removed from call stack)
}

print();


// ------------------------------
// CALL STACK EXAMPLE
// ------------------------------
function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.trace(); // shows call stack order
}

first();

/*
Call Stack order:
Global → first() → second() → third()
Then destroyed in reverse order
*/


// ------------------------------
// CALL STACK OVERFLOW (IMPORTANT)
// ------------------------------
// Infinite recursion fills the call stack
// Browser stops execution to prevent crash

// function infinite() {
//     infinite();
// }
// infinite();


// ------------------------------
// TEMPORAL DEAD ZONE (TDZ)
// ------------------------------
let total = 100;

function calculate() {
    // Local 'total' shadows global 'total'
    // Local 'total' exists in TDZ until initialized

    // console.log(total); // ❌ ReferenceError (TDZ)
    let total = 100;
}

calculate();
