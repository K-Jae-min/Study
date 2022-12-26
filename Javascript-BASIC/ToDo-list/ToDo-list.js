const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const createTodo = function () {
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");

  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
  });
  newLi.addEventListener("dblclick", () => {
    newLi.remove();
  });

  newSpan.textContent = todoInput.value;
  todoList.appendChild(newLi);
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  todoInput.value = "";
  saveItmesFn();
};

const keyCodeCheck = function () {
  if (window.event.keyCode === 13 && todoInput.value) {
    createTodo();
  }
};

const deleteAll = function () {
  const liList = document.querySelectorAll("li");
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove();
  }
};

const saveItmesFn = function () {
  const saveItmes = [];
  for (let i = 0; i < todoList.children.length; i++) {
    const todoObj = {
      contents: todoList.children[i].querySelector("span").textContent,
      complete: todoList.children[i].classList.contains("complete"),
    };
    saveItmes.push(todoObj);
  }
  console.log(saveItmes);
};
