const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    addTaskButton.addEventListener('click', addTask);
    
    function addTask() {
      const taskName = taskInput.value.trim();
      
      if (taskName !== '') {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        const taskNameElement = document.createElement('span');
        taskNameElement.className = 'task-name';
        taskNameElement.textContent = taskName;
        
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';
        
        deleteButton.addEventListener('click', removeTask);
        
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskNameElement);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        
        taskInput.value = '';
      }
    }
    
    function removeTask() {
      const taskItem = this.parentElement;
      taskList.removeChild(taskItem);
    }