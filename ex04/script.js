let totalTasks = 0;

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

function updateTaskCount(change) {
    totalTasks += change;
    taskCount.textContent = totalTasks;
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function(e) {
        if (e.target !== deleteBtn) {
            li.classList.toggle("completed");
        }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    
    deleteBtn.addEventListener("click", function() {
        li.remove();
        updateTaskCount(-1);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    updateTaskCount(1);

    taskInput.value = "";
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});