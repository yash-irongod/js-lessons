// Async/Await is used to handle asynchronous code in a cleaner way.
// Promise chaining (.then) can become messy when there are many steps.
// Async/Await makes asynchronous code look like synchronous code.

// ---------------------------------------------------
// STEP 1: Each function returns a Promise
// ---------------------------------------------------

function orderFood() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Food Ordered");
            resolve("Food Ordered");   // Promise fulfilled
        }, 1000);
    });
}

function prepareFood() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Food Prepared");
            resolve("Food Prepared");
        }, 1000);
    });
}

function deliverFood() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Food Delivered");
            resolve("Food Delivered");
        }, 1000);
    });
}


// ---------------------------------------------------
// OLD WAY: Promise Chaining
// ---------------------------------------------------

// orderFood()
//     .then((data) => {
//         console.log(data);
//         return prepareFood();
//     })
//     .then((data) => {
//         console.log(data);
//         return deliverFood();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// ---------------------------------------------------
// NEW WAY: Async/Await
// ---------------------------------------------------

// When we add "async" before a function:
// 1. The function automatically returns a Promise.
// 2. Inside it, we can use "await" to pause execution until a Promise resolves.

async function order() {
    // await pauses execution until the Promise resolves
    const data1 = await orderFood();
    console.log("Resolved:", data1);

    const data2 = await prepareFood();
    console.log("Resolved:", data2);

    const data3 = await deliverFood();
    console.log("Resolved:", data3);
}

// Calling the async function
// It returns a Promise immediately
console.log(order());


// ---------------------------------------------------
// IMPORTANT LEARNING POINTS
// ---------------------------------------------------

// 1. "async" makes a function return a Promise automatically.
// 2. "await" can only be used inside an async function.
// 3. await pauses execution of that function (not the whole program).
// 4. Async/Await is syntactic sugar over Promises.
// 5. To handle errors in async/await, we use try...catch.


// Example with error handling:

async function orderWithErrorHandling() {
    try {
        const data1 = await orderFood();
        console.log(data1);

        const data2 = await prepareFood();
        console.log(data2);

        const data3 = await deliverFood();
        console.log(data3);

    } catch (error) {
        console.log("Error occurred:", error);
    }
}