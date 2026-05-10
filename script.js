const inputTask = document.getElementById("inputTask");
const btnAdd = document.getElementById("btnAdd");
const taskList = document.getElementById("taskList");
const btnClear = document.getElementById("btnClear");

btnAdd.addEventListener("click", function () {
  let textTask = inputTask.value;

  if (textTask === "") {
    alert("Data must be entered!");
    return;
  }

  let deadlineTask = prompt("Deadline Task : ");
  let newList = document.createElement("li");

  newList.innerHTML = 
  `<div class="task-container">
        <div class="task">${textTask}</div>
        <div class="deadline">${deadlineTask}</div>
        <div class="status">On Progress</div>
    </div>

    <div class="actions">
        <i class="fas fa-check"></i>
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash"></i>
    </div>`;

  if (
    (newList.querySelector(".fa-check").onclick = function () {
      newList.querySelector(".status").innerText = "Done";
      newList.querySelector(".status").style.color = "green";
    })
  );

  newList.querySelector(".fa-edit").onclick = function () {
    const editTextTask = prompt("Edit Task : ", textTask);
    const editDeadlineTask = prompt("Deadline Task : ", deadlineTask);
    
    if (editTextTask !== null && editTextTask !== "" && editDeadlineTask !== null && editDeadlineTask !== "") {
      newList.querySelector(".task").innerText = editTextTask;
      newList.querySelector(".deadline").innerText = editDeadlineTask;
    }
  };

  if (
    (newList.querySelector(".fa-trash").onclick = function () {
      newList.remove();
    })
  )

  btnClear.addEventListener("click", function () {
    taskList.remove();
  })

  taskList.appendChild(newList);

  inputTask.value = "";
});
