let savedTasks = [];

function loadTasks() {
    savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(taskText => {
        createTaskElement(taskText);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    loadTasks(); // ✔️ Load tasks when page is ready

    const addButton  = document.getElementById("add-task-btn");
    const taskInput  = document.getElementById("task-input");
    const taskList   = document.getElementById("task-list");

    // rest of the code...


    // Function to build and show a task on the page
    function createTaskElement(taskText) {
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        removeButton.onclick = function () {
            taskList.removeChild(listItem);
            removeTaskFromLocalStorage(taskText);
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    }

    // Function to add a new task
    function addTask () {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Enter a task");
            return;
        }

        createTaskElement(taskText); // Show it
        savedTasks.push(taskText);   // Add to memory
        localStorage.setItem("tasks", JSON.stringify(savedTasks)); // Save to storage

        taskInput.value = ""; // Clear input field
    }

    // Function to remove task from memory and storage
    function removeTaskFromLocalStorage(taskText) {
        savedTasks = savedTasks.filter(task => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
    }

    // Event: Add task when button clicked
    addButton.addEventListener("click", addTask);

    // Event: Add task when Enter is pressed
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    console.log("Page loaded - ready to add task");
});
