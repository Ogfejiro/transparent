let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please add a task");
  } else {
    // Create the li element
    let li = document.createElement("li");

    // Create the checkbox element with a unique ID for styling
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.id = "checkbox-" + Math.random().toString(36).substring(2, 7);

    // Create a label element for accessibility and improved UX
    let label = document.createElement("label");
    label.setAttribute("for", checkbox.id); // Link the label to the checkbox
    label.innerText = inputBox.value; // Set the label text to match the task

    // Add click event listener to the checkbox
    checkbox.addEventListener("click", function () {
      li.classList.toggle("completed"); // Toggle line-through class
    });

    // Create a span element for deletion
    let span = document.createElement("span");
    span.classList.add("delete-btn"); // Add a class for styling (optional)
    span.innerText = "\u00d7"; // Unicode character for 'X'

    // Add click event listener to the span for deletion
    span.addEventListener("click", function () {
      listContainer.removeChild(li); // Remove the li element from the list
    });

    // Append the checkbox, label, and span to the li element
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(span);

    // Append the li element to the listContainer
    listContainer.appendChild(li);

    // Clear the input box for the next task
    inputBox.value = "";
  }
}
