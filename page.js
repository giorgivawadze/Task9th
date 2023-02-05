
const title = document.querySelector (".container,h1");
const input = document.querySelector (".container,input");
const button = document.querySelector (".container,button");
const taskList = document.querySelector ("#taskList");

input.addEventListener('click', function () {
    let task = taskInput.value;
    if (!task) return;

    let li = document.createElement ('li');
    li.textContent = task;
    taskList.appendChild (li);
    taskInput.value= "";
}


)