// ==========================================
// ERROR HANDLING WITH ASYNC / AWAIT + FETCH
// ==========================================

// fetch() is used to make HTTP requests.
// It returns a Promise.
// We use async/await to handle it cleanly.

async function getData() {
    try {

        // Step 1: Send request to server
        const response = await fetch("https://dummyjson.com/products");

        // fetch() only rejects on network failure.
        // If server returns 404 or 500,
        // it still resolves the Promise.
        // So we manually check response.ok

        if (response.ok === false) {
            // If response is not successful (like 404),
            // we throw a custom error
            throw new Error("Data not found");
        }

        // Step 2: Convert response to JSON
        // response.json() also returns a Promise
        const data = await response.json();

        console.log("Full Data:", data);

        // Accessing nested data example:
        // console.log(data.products[0].title);

        // Looping through products example:
        // data.products.forEach((ele) => {
        //     console.log(ele.price);
        // });

    } 
    catch (error) {
        // This block runs if:
        // 1. Network error
        // 2. We manually throw error
        // 3. JSON parsing fails

        console.error("Error occurred:", error.message);
    }
}

// Calling async function
// It automatically returns a Promise
getData();


// ==========================================
// IMPORTANT LEARNING POINTS
// ==========================================

// 1. fetch() returns a Promise.
// 2. await pauses execution until Promise resolves.
// 3. fetch does NOT reject for HTTP errors (404, 500).
// 4. We must manually check response.ok.
// 5. throw creates a custom error.
// 6. try...catch handles both thrown errors and rejected promises.
// 7. async functions always return a Promise.