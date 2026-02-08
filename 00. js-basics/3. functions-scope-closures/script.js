/*
==============================
FUNCTIONS & SCOPE
==============================
*/

// Function declaration
function greet() {
    console.log("Hello world");
}
greet();


// Function with parameters
function sum(x, y) {
    console.log("sum:", x + y);
}
sum(10, 20);


// Function expression
const expFunc = function () {
    console.log("Function expression");
};
expFunc();


// Arrow function
const arrowFunc = () => {
    console.log("Arrow function");
};
arrowFunc();


// --------------------
// CALLBACK FUNCTION
// --------------------
function paneer() {
    console.log("Paneer lane jana hai");
}

function sabji(callback) {
    callback();
    console.log("Paneer ki sabji banani hai");
}

sabji(paneer);


// --------------------
// CLOSURE
// --------------------
function parent() {
    let x = 20;

    function child() {
        console.log("closure x:", x);
    }

    return child;
}

const fn = parent();
fn(); // remembers x even after parent finishes
