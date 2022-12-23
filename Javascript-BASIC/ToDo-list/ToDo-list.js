const todoInput = document.querySelector("#todo-input");

const keyCodeCheck = function () {
  if (window.event.keyCode === 13 && todoInput.value !== "") {
    const todoList = document.querySelector("#todo-list");
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");

    newSpan.textContent = todoInput.value;
    todoList.appendChild(newLi);
    newLi.appendChild(newSpan);
    todoInput.value = "";

    console.log(todoList);
  }
};
