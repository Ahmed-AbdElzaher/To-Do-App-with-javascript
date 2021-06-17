let inputData = document.getElementById("inputData");
let btnAdd = document.getElementById("btnAdd");
let noTask = document.getElementById("noTask");
let tasks = document.getElementById("tasks");

let showNoTask = () => {
  if (tasks.childElementCount == 0) {
    noTask.classList.remove("none");
  }
};

let addTask = () => {
  let task = inputData.value;
  if (task.trim() == 0 ||  inputData.value.length < 3 || inputData.value.length > 30) {
    alert("you must enter valid data");
  } else {
    noTask.classList.add("none");
    tasks.innerHTML += `
    <div class="alert alert-info task">
    ${task}
    <button class="delete btn btn-danger float-right">Delete</button>
    </div>
    `;
    inputData.value = "";
  }
};

let check = e => {
  if (e.target.classList.contains("task")) {
    e.target.classList.toggle("check");
  }
};

tasks.addEventListener("click", check);

btnAdd.addEventListener("click", addTask);
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    showNoTask();
  }
});
