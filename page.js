
const title = document.querySelector (".container,h1");
const input = document.querySelector (".container,input");
const button = document.querySelector (".container,button");
const taskList = document.querySelector ("#taskList");
const spinner = document.querySelector ('#spinner');
const clearall = document.getElementById ('clearall');
const cleardone = document.getElementById ('cleardone');
const save = document.getElementById ('Save');
const toDoItems = [];

input.addEventListener('click', function () {
    let task = taskInput.value;
    if (!task) return;

    let li = document.createElement ('li');
    li.textContent = task;
    taskList.appendChild (li);
    taskInput.value= "";
}
)

function resetToDoList() {
    taskList.innerHTML = "";
    taskInput.value = "";
    toDoItems = [];
  }  
 clearall.addEventListener("click", resetToDoList);

 save.addEventListener("click", function() {
    const toDoArray = Array.from(taskList.children).map(li => li.textContent);
    localStorage.setItem("toDoItems", JSON.stringify(toDoArray));
  });
  
  function loadToDoList() {
    const savedToDos = localStorage.getItem("toDoItems");
    if (savedToDos) {
      const toDoArray = JSON.parse(savedToDos);
      toDoArray.forEach(toDo => {
        let li = document.createElement("li");
        li.textContent = toDo;
        taskList.appendChild(li);
      });
    }
  }
  
  loadToDoList();

  cleardone.addEventListener("click", function() {
    const doneTasks = taskList.querySelectorAll("li.done");
    doneTasks.forEach(li => {
      li.remove();
    });
  
    const toDoArray = Array.from(taskList.children).map(li => li.textContent);
    localStorage.setItem("toDoItems", JSON.stringify(toDoArray));
  });
  
  taskList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("done");
    }
  });
  

function init () {
    spinner.style.display = 'block';
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then ((res) => res.json ())
    .then ((res) => {
         spinner.style.display = 'none';
         console.log(res.data);
    })
} 
init ()