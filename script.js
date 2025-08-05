document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        // Create <li>
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create Remove Button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Attach remove functionality
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        // Append Remove button to li
        li.appendChild(removeButton);

        // Append li to taskList
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';
    }

    // Add Task on Button Click
    addButton.addEventListener('click', addTask);

    // Add Task on Enter Key Press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
