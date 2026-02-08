/*
====================================================
PROMISE CHAINING
====================================================

Promise chaining allows us to:
- Run async tasks SEQUENTIALLY
- Pass results from one task to the next
- Avoid callback hell
*/


// -------------------------------------------------
// ASYNC TASK 1
// -------------------------------------------------
function doHomework() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let done = true;

            if (done) {
                console.log("Homework done");
                resolve("Homework completed successfully");
            } else {
                reject("Homework not done");
            }
        }, 3000);
    });
}


// -------------------------------------------------
// ASYNC TASK 2
// -------------------------------------------------
function eatDinner() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let done = false;

            if (done) {
                console.log("Dinner done");
                resolve("Dinner completed successfully");
            } else {
                reject("Dinner not done");
            }
        }, 2000);
    });
}


// -------------------------------------------------
// ASYNC TASK 3
// -------------------------------------------------
function goToPlayground() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let done = true;

            if (done) {
                console.log("Going to the playground!");
                resolve("Playground completed successfully");
            } else {
                reject("Not allowed to go to playground");
            }
        }, 2000);
    });
}


// -------------------------------------------------
// PROMISE CHAIN
// -------------------------------------------------

doHomework()
    .then((data) => {
        console.log(data);
        return eatDinner(); // return promise
    })
    .then((data) => {
        console.log(data);
        return goToPlayground();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("Error occurred:", error);
    })
    .finally(() => {
        console.log("Go to sleep");
    });


/*
IMPORTANT NOTES:
- Each .then() waits for the previous promise
- Returning a promise is REQUIRED for chaining
- If any promise fails → .catch() runs
- .finally() always runs
*/
