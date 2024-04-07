const inputTask = document.getElementById("task");

function addTask() {
    if (inputTask.value === '') {
        alert("Please enter a task!");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputTask.value;
        document.getElementById("tasks-container").appendChild(li);
    }
}