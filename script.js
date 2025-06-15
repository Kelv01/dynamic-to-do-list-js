document.addEventListener("DOMContentLoaded", function () {
    const addButton  = document.getElementById("add-task-btn");

    const taskInput   = document.getElementById("task-input");

    const taskList  = document.getElementById("task-list");


    function addTask () {
        const taskText =  taskInput.value.trim();

        if (taskText === "") {
            
            alert("enter a task");
            return;

        }

        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        removeButton.onclick = function () {
            taskList.removeChild(listItem);

        };
        listItem.appendChild(removeButton);
        taskInput.appendChild(listItem);
        
        taskInput.value = "";

    };
    addButton.addEventListener("click", addTask);

    addButton.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    console.log("Page loaded -  ready to add task");
});


