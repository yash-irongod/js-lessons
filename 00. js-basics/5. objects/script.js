/*
==============================
OBJECTS IN JAVASCRIPT
==============================
*/

let person = {
    name: "Ankit",
    age: 45
};

console.log("name:", person.name);


// Update
person.age = 50;


// Delete
delete person.name;
console.log("updated object:", person);


// --------------------
// Object copy (spread)
// --------------------
let obj1 = { x: 1, y: 2 };
let obj2 = { ...obj1 };

obj2.x = 100;

console.log("obj1:", obj1);
console.log("obj2:", obj2);


// --------------------
// Function returning object
// --------------------
function createEmployee() {
    return {
        name: "Rahul",
        age: 30
    };
}

let emp = createEmployee();
console.log("employee:", emp);
