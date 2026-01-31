// Select the button element on which CSS styles will be applied
const submitButton = document.querySelector("#submitBtn");


// Select the button that will CONTROL the CSS toggle
const toggleButton = document.querySelector("#toggleBtn");


// classList METHODS:

// submitButton.classList.add("btn")    → adds the class "btn" to the element
// submitButton.classList.remove("btn") → removes the class "btn" from the element
// submitButton.classList.toggle("btn"):
//      - If the element already has the class "btn"   → it REMOVES it
//      - If the element does NOT have the class "btn" → it ADDS it

// The "btn" class is styled in CSS,
// so when this class is added, CSS rules apply automatically.
// When the class is removed, those CSS rules no longer apply.

toggleButton.addEventListener("click", function () {
    submitButton.classList.toggle("btn");
});
