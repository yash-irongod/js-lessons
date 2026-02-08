/*
==============================
ARRAYS & ARRAY METHODS
==============================
*/

let array = [7, 5, 9, 4, 1];
console.log("Original:", array);


// Sorting
array.sort((a, b) => a - b);
console.log("Sorted:", array);


// Push / Pop
array.push(10);
array.pop();


// Looping
for (let i = 0; i < array.length; i++) {
    console.log("array element:", array[i]);
}


// --------------------
// map
// --------------------
let mapped = array.map(el => el * 10);
console.log("map:", mapped);


// --------------------
// filter
// --------------------
let filtered = array.filter(el => el % 2 === 0);
console.log("filter:", filtered);


// --------------------
// reduce
// --------------------
let total = array.reduce((sum, cur) => sum + cur, 0);
console.log("reduce:", total);


// --------------------
// splice
// --------------------
array.splice(2, 1, 100);
console.log("splice:", array);
