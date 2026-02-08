/*
====================================================
TODO LIST – DOM MANIPULATION & EVENTS
====================================================

Concepts used in this file:
- querySelector
- event handling
- preventDefault
- createElement
- appendChild
- removeChild
*/


// -------------------------------------------------
// SELECTING ELEMENTS FROM THE DOM
// -------------------------------------------------

// Input field where user types the task
const input = document.querySelector("#task");

// Submit button
const addButton = document.querySelector(".btn");

// Container where all tasks will be added
const list = document.querySelector(".list");


// -------------------------------------------------
// ADD TASK EVENT
// -------------------------------------------------

/*
We listen for the "click" event on the submit button.
Since the button is inside a <form>,
clicking it would normally refresh the page.

e.preventDefault() stops that default form behavior.
*/

addButton.addEventListener("click", (e) => {
    e.preventDefault(); // stop page reload


    // -------------------------------------------------
    // VALIDATION: prevent empty task
    // -------------------------------------------------
    if (input.value === "") {
        alert("Please enter a task");
        return; // stop further execution
    }


    // -------------------------------------------------
    // CREATING NEW TASK ELEMENTS
    // -------------------------------------------------

    // Create <li> element for the task
    const li = document.createElement("li");

    // Create delete button for this task
    const deleteBtn = document.createElement("button");

    // Set text for task and delete button
    li.innerText = input.value;
    deleteBtn.innerText = "Delete";


    // -------------------------------------------------
    // ADD ELEMENTS TO DOM
    // -------------------------------------------------

    // Add delete button inside the <li>
    li.appendChild(deleteBtn);

    // Add <li> to the list container
    list.appendChild(li);


    // -------------------------------------------------
    // DELETE TASK LOGIC
    // -------------------------------------------------

    /*
    Each task gets its own delete button.
    When clicked, we remove ONLY that task (<li>)
    from the list.
    */

    deleteBtn.addEventListener("click", () => {
        list.removeChild(li);
    });


    // -------------------------------------------------
    // RESET INPUT FIELD
    // -------------------------------------------------
    input.value = "";
});


/*
====================================================
SUMMARY (for revision):
====================================================

- User enters a task
- Clicks "Add Task"
- JavaScript dynamically creates:
    - <li>
    - Delete button
- Task is added to the DOM
- Delete button removes only its own task
- Page does NOT refresh due to preventDefault()
*/
