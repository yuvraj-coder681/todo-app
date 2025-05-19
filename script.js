function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if (taskText !== "") {
      let list = document.getElementById("taskList");
      let li = document.createElement("li");
      li.textContent = taskText;
      list.appendChild(li);
      input.value = "";
    }
  }