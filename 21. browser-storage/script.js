// ==========================================
// BROWSER STORAGE IN JAVASCRIPT
// ==========================================

// Types of browser storage:
// 1. localStorage
// 2. sessionStorage
// 3. Cookies

// -------------------------------------------------
// 🔍 HOW TO VIEW STORAGE IN BROWSER
// -------------------------------------------------

// Open Developer Tools → Application tab → Storage section
// There you can see:
// - Local Storage
// - Session Storage
// - Cookies
// You can inspect, edit, and delete stored values manually.

// -------------------------------------------------
// LOCAL STORAGE
// -------------------------------------------------

// localStorage:
// - Stores data permanently (until manually cleared)
// - Data persists even after browser restart
// - Storage limit ~5MB
// - NOT secure (never store passwords)
// - Data is stored as strings

let obj = {
    title: "Macbook",
    description: "This is Macbook Pro",
    price: 100000,
    discountPercentage: 10,
    rating: 4.5,
    stock: 10,
    brand: "Apple",
    category: "Laptops",
};

// Must convert object to string before storing
localStorage.setItem("obj", JSON.stringify(obj));
localStorage.setItem("name", "Yash");
localStorage.setItem("age", 19);

// Getting data (always returns string or null)
console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("age"));

// Convert back to object
console.log(JSON.parse(localStorage.getItem("obj")));

// Remove specific item
localStorage.removeItem("age");

// Clear everything
// localStorage.clear();

// Common uses:
// - Theme preference (dark mode)
// - Language selection
// - JWT token (not safest, but common)
// - Login state flag

// ⚠️ Important:
// localStorage is NOT secure.
// Never store passwords or sensitive data.


// -------------------------------------------------
// SESSION STORAGE
// -------------------------------------------------

// sessionStorage:
// - Data exists only while the tab is open
// - Cleared automatically when tab closes
// - Not shared across tabs
// - Also stores data as strings
// - NOT secure (same security model as localStorage)

sessionStorage.setItem("obj", JSON.stringify(obj));
sessionStorage.setItem("name", "Yash");
sessionStorage.setItem("age", 19);

console.log(sessionStorage.getItem("name"));
console.log(sessionStorage.getItem("age"));
console.log(JSON.parse(sessionStorage.getItem("obj")));

// sessionStorage.removeItem("age");
// sessionStorage.clear();

// Common uses:
// - Temporary form data
// - OTP verification steps
// - Multi-step forms


// -------------------------------------------------
// COOKIES
// -------------------------------------------------

// Cookies:
// - Stored in browser
// - Automatically sent with every HTTP request to server
// - Small size (~4KB)
// - Can have expiry date
// - Can be made more secure using:
//      - HttpOnly
//      - Secure
//      - SameSite

document.cookie = "name=Yash; expires=Fri, 31 Dec 9999 23:59:59 GMT";
document.cookie = "age=19; expires=Fri, 31 Dec 9999 23:59:59 GMT";

console.log(document.cookie);

// Common uses:
// - Session management
// - Authentication (with HttpOnly flag)
// - Remember me feature

// ⚠️ Cookies can be secure if configured properly.
// Plain cookies are not secure by default.


// -------------------------------------------------
// FETCH + COOKIES NOTE
// -------------------------------------------------

// Cookies are automatically sent with HTTP requests
// if domain matches and settings allow it.

async function sample() {
    await fetch("http://127.0.0.1:5500/21/");
}

sample();