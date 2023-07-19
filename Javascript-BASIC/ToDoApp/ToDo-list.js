const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const savedTodoList = JSON.parse(localStorage.getItem("saved-items"));

const savedWeatherData = JSON.parse(localStorage.getItem("saved-weather"));

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
  if (window.event.keyCode === 13 && todoInput.value.trim()) {
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

if (savedTodoList) {
  for (let i = 0; i < savedTodoList.length; i++) {
    createTodo(savedTodoList[i]);
  }
}

const weatherDataActive = function ({ location, weather }) {
  const weatherMainList = ["Clear", "Clouds", "Drizzle", "Rain", "Snow", "Thunderstorm"];
  weather = weatherMainList.includes(weather) ? weather : "Fog";
  const locationNameTag = document.querySelector("#location-name-tag");

  locationNameTag.textContent = location;
  document.body.style.backgroundImage = `url("./img/${weather}.jpg")`;

  if (!savedWeatherData || savedWeatherData.location !== location || savedWeatherData.weather !== weather) {
    localStorage.setItem("saved-weather", JSON.stringify({ location, weather }));
  }
};

const weatherSearch = function ({ latitude, longitude }) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=API`)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const weatherData = {
        location: json.name,
        weather: json.weather[0].main,
      };
      weatherDataActive(weatherData);
    })
    .catch((err) => {
      console.error(err);
    });
};

const accessToGeo = function ({ coords }) {
  const { latitude, longitude } = coords;
  const positionObj = {
    latitude,
    longitude,
  };
  weatherSearch(positionObj);
};

const aksForLocation = function () {
  navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
    console.log(err);
  });
};
aksForLocation();

if (savedWeatherData) {
  weatherDataActive(savedWeatherData);
}
