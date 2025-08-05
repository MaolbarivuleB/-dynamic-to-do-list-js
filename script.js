// Ensure DOM is fully loaded before running script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create new list item for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Attach event to remove button to delete task when clicked
        removeButton.onclick = () => {
            taskList.removeChild(listItem);
        };

        // Append remove button to task item
        listItem.appendChild(removeButton);

        // Append task item to the task list
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = "";
    }

    // Event listener for Add Task button
    addButton.addEventListener('click', addTask);

    // Event listener for pressing Enter key in input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
