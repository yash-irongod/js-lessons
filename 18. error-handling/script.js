// ===============================
// ERROR HANDLING IN JAVASCRIPT
// ===============================

// JavaScript errors are mainly of two types:
// 1. Compile-time (Syntax errors) → Cannot be caught using try...catch
// 2. Runtime errors → Can be caught using try...catch

console.log("First Line");

// If a line may cause a runtime error,
// we wrap it inside try...catch so that
// the program does NOT stop execution.

try {
    // let sample = 246;
    console.log(sample);   // sample is not defined → ReferenceError
}
catch (err) {
    // catch receives the error object
    console.warn("Error caught:", err);
}
finally {
    // finally always runs (whether error occurs or not)
    console.log("Finally block executed");
}

console.log("Last Line");


// =====================================
// Console Methods for Debugging
// =====================================

// console.error() → shows error in red
// console.warn()  → shows warning in yellow
// console.info()  → informational message
// console.debug() → debug-level message


// =====================================
// Throwing Custom Errors
// =====================================

console.log("First Line");

try {
    let age = 15;

    if (age < 18) {
        // We manually throw an error
        throw new Error("Access Denied");
    }

    console.log("Access Granted");

}
catch (error) {
    console.error("Custom Error:", error.message);
}
finally {
    console.log("Finally block executed");
}

console.log("Last Line");


// =====================================
// IMPORTANT LEARNING POINTS
// =====================================

// 1. try → Wrap code that may throw runtime errors.
// 2. catch → Handles the error and prevents program crash.
// 3. finally → Always executes.
// 4. throw → Used to create custom errors manually.
// 5. try...catch is commonly used with async/await.
// 6. Syntax errors cannot be caught using try...catch.