/*
====================================================
PROMISE BASICS
====================================================

A Promise is an object used to handle asynchronous operations.

It represents a value that will be:
- available in the future
- OR fail with an error

Why Promises?
- Callbacks become hard to manage (callback hell)
- Promises give a cleaner, structured way
*/


// -------------------------------------------------
// PROMISE STATES
// -------------------------------------------------

/*
A Promise can be in one of three states:

1. Pending   → initial state
2. Fulfilled → operation successful (resolve)
3. Rejected  → operation failed (reject)
*/


// -------------------------------------------------
// CREATING A PROMISE
// -------------------------------------------------

/*
A Promise is created using the Promise constructor.

The constructor takes an executor function.
This executor runs immediately and receives:
- resolve → marks promise as fulfilled
- reject  → marks promise as rejected
*/

const q = new Promise(function (resolve, reject) {

    // Simulating async work using setTimeout
    setTimeout(() => {
        let done = true;
        // let done = false;

        if (done) {
            resolve({ name: "Yash", age: 18 });
        } else {
            reject("Network issue");
        }

    }, 5000); // 5 seconds delay
});


// -------------------------------------------------
// CONSUMING A PROMISE
// -------------------------------------------------

/*
.then()   → runs when promise is resolved
.catch()  → runs when promise is rejected
.finally()→ runs in both cases
*/

q.then((data) => {
    console.log("Promise resolved with data:", data);
})
.catch((error) => {
    console.log("Promise rejected with error:", error);
})
.finally(() => {
    console.log("Finally block executed");
});


// -------------------------------------------------
// PROMISE OBJECT STATUS (DEBUGGING)
// -------------------------------------------------

console.log(q);

/*
Initially:
Promise { <pending> }

After resolution:
Promise { <fulfilled> }

(or rejected if error occurs)
*/
