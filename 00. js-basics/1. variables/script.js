/*
==============================
VARIABLES IN JAVASCRIPT
==============================

Variables are containers used to store data.

JavaScript provides 3 ways to declare variables:
1. var   → function scoped, can be re-declared (old, unsafe)
2. let   → block scoped, can be updated
3. const → block scoped, cannot be updated
*/


// --------------------
// var (old way)
// --------------------
var a = 20;
a = 30; // allowed
console.log("var a:", a);


// var allows re-declaration (dangerous)
var a = 40;
console.log("var a redeclared:", a);


// --------------------
// let (modern)
// --------------------
let x = 10;
x = 20; // allowed
console.log("let x:", x);

// let x = 30; ❌ not allowed (same scope)


// --------------------
// const (constant)
// --------------------
const y = 50;
console.log("const y:", y);

// y = 60 ❌ not allowed


/*
KEY POINTS:
- Prefer const by default
- Use let if value must change
- Avoid var in modern JS
*/
