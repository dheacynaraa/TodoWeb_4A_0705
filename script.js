const inputTask = document.getElementById("inputTask");
const btnAdd = document.getElementById("btnAdd");
const taskList = document.getElementById("taskList");

btnAdd.addEventListener("click", function() {

    let textTask = inputTask.value;

    if(textTask === "") {
        alert("Data must be entered!");
        return;
    }

    let newList = document.createElement("li");
    let newSpan = document.createElement("span");

    newSpan.innerHTML = textTask;

    newList.appendChild(newSpan);

    taskList.appendChild(newList);
    
    const newColor = document.querySelectorAll("li");
    newColor.forEach((item, index) => {
        if(index % 2 === 0) {
            item.style.color = "red";
        } else {
            item.style.color = "green";
        }
    });    

    inputTask.value = "";
    
 });