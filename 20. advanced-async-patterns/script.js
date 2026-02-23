// ==========================================
// SENDING DATA USING FETCH (POST REQUEST)
// ==========================================

// fetch() can be used for:
// - GET  → Fetch data
// - POST → Send data
// - PUT  → Update data
// - DELETE → Remove data

// Here we are sending data to the server using POST

async function sendData() {
    try {

        // Step 1: Send POST request
        const response = await fetch("https://dummyjson.com/products/add", {

            method: "POST",   // We are sending data

            headers: {
                // Telling server that we are sending JSON
                "Content-Type": "application/json; charset=UTF-8",
            },

            // body must be stringified JSON
            body: JSON.stringify({
                title: "Macbook",
                description: "This is Macbook Pro",
                price: 100000,
                discountPercentage: 10,
                rating: 4.5,
                stock: 10,
                brand: "Apple",
                category: "Laptops",
            }),
        });

        // Always check if response is successful
        if (!response.ok) {
            throw new Error("Failed to send data");
        }

        // Step 2: Convert response to JSON
        const data = await response.json();

        console.log("Server Response:", data);

    } catch (err) {

        // Will catch:
        // - Network errors
        // - Manual thrown errors
        console.error("Error occurred:", err.message);
    }
}

// Calling the function
sendData();


// ==========================================
// IMPORTANT LEARNING POINTS
// ==========================================

// 1. async function always returns a Promise.
// 2. await pauses execution until Promise resolves.
// 3. fetch() returns a Promise.
// 4. For POST requests, we must:
//      - Set method to POST
//      - Set headers
//      - Convert body to JSON string
// 5. Always check response.ok.
// 6. Use try...catch for error handling.