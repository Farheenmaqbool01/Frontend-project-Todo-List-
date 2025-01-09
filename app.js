
function addtask() {
    const newTask = document.createElement('li');

    const tasklist = document.getElementById('tasklist');
    const inputTask = document.getElementById('inputTask').value;

    // Add task text
    newTask.textContent = inputTask;
    tasklist.appendChild(newTask);

    // Add checkbox
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    // Add taskText reference for toggling completed class
    const taskText = document.createElement('span');
    taskText.textContent = inputTask;

    // Append taskText and checkbox to newTask
    newTask.textContent = ''; // Clear text to avoid duplication
    newTask.appendChild(checkbox);
    newTask.appendChild(taskText);

    // Checkbox onchange event
    checkbox.onchange = function () {
        if (checkbox.checked) {
            taskText.classList.add('completed');
        } else {
            taskText.classList.remove('completed');
        }
    };

    // Clear input field
    document.getElementById('inputTask').value = "";

    // Add delete and edit functionality
    deleteTask(newTask);
}

function deleteTask(newTask){
    const deletebtn = document.createElement('button');
    deletebtn.textContent = "Delete";
    deletebtn.classList.add('btn','deletebtn');
    newTask.appendChild(deletebtn);
    deletebtn.onclick = function(){
        newTask.remove();
    }
 
    const editbtn = document.createElement('button');
    editbtn.textContent = "Edit";
    editbtn.classList.add('btn','editbtn');
     editbtn.onclick = function () {
        const newInput = prompt("Edit your task:", newTask.firstChild.textContent);
        if (newInput !== null && newInput.trim() !== "") {
            newTask.firstChild.textContent = newInput;
        }
    };
    newTask.appendChild(editbtn);
           
}

    


