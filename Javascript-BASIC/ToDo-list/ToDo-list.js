// 전역변수
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const savedTodoList = JSON.parse(localStorage.getItem("saved-items"));

const createTodo = function (storageData) {
  let todoContents = todoInput.value;
  if (storageData) {
    todoContents = storageData.contents;
  }

  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");

  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
    saveItmesFn();
  });

  newLi.addEventListener("dblclick", () => {
    newLi.remove();
    saveItmesFn();
  });

  if (storageData?.complete) {
    newLi.classList.add("complete");
  }

  newSpan.textContent = todoContents;
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
  saveItmesFn();
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

  saveItmes.length === 0 ? localStorage.removeItem("saved-items") : localStorage.setItem("saved-items", JSON.stringify(saveItmes));
};

// 위코드와 같음(삼항연산자 = (조건) ? (true일 경우 실행) :(false일 경우 실행) )
//   if (saveItmes.length === 0) {
//     localStorage.removeItem("saved-items");
//   } else {
//     localStorage.setItem("saved-items", JSON.stringify(saveItmes));
//   }
// };

if (savedTodoList) {
  for (let i = 0; i < savedTodoList.length; i++) {
    createTodo(savedTodoList[i]);
  }
}
