const inputTask = document.getElementById("inputTask");
const btnAdd = document.getElementById("btnAdd");
const taskList = document.getElementById("taskList");

btnAdd.addEventListener("click", function () {
  let textTask = inputTask.value;

  if (textTask === "") {
    alert("Data must be entered!");
    return;
  }

  let newList = document.createElement("li");

  newList.innerHTML = `<div class="task-container">
            <div class="task">${textTask}</div>
            <div class="status">On Progress</div>
        </div>
        `;

  taskList.appendChild(newList);

  inputTask.value = "";
});
