const formTask = document.querySelector(".form-task");

formTask.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputForm = document.querySelector(".input-form");
  console.log(inputForm.value);

  const wrapperList = document.querySelector(".task-list-wrapper");

  const taskList = document.createElement("li");

  taskList.innerHTML = inputForm.value;

  wrapperList.append(taskList);
});
