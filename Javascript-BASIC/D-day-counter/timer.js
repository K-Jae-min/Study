const messagecontainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");
const savedDate = localStorage.getItem("saved-date");
const interbalIdArr = [];

container.style.display = "none";
messagecontainer.innerHTML = "<h3>D-day를 입력해주세요.</h3>";

const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  // const dateFormat = inputYear + "-" + inputMonth + "-" + inputDate; 아래와 같은 표현
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;

  return dateFormat;
};

const counterMaker = function (data) {
  const nowDate = new Date();
  const targetDate = new Date(data).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;
  // 만약, remaining이 0이라면, 타이머가 종료 되었습니다. 출력
  if (remaining <= 0) {
    container.style.display = "none";
    messagecontainer.style.display = "flex";
    messagecontainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
    return;
  } else if (isNaN(remaining)) {
    //만약, 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력
    container.style.display = "none";
    messagecontainer.style.display = "flex";
    messagecontainer.innerHTML = "<h3>유효한 시간대가 아닙니다</h3>";
    return;
  }

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60,
  };

  const documentarr = ["days", "hours", "min", "sec"];
  const timeKeys = Object.keys(remainingObj);
  // remainingObj 키 배열

  const format = function (time) {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  };

  let i = 0;
  for (let tag of documentarr) {
    const remainingTime = format(remainingObj[timeKeys[i]]);
    document.getElementById(tag).textContent = remainingTime;
    i++;
  }

  // for of 이용 리팩터링
  // const documentObj = {
  //   days: document.getElementById("days"),
  //   hours: document.getElementById("hours"),
  //   min: document.getElementById("min"),
  //   sec: document.getElementById("sec"),
  // };

  // let i = 0;
  // for (let key in documentObj) {
  //   documentObj[key].textContent = remainingObj[timeKeys[i]];
  //   //i = i + 1
  //   i++;
  // }
};

const starter = function (targetDateInput) {
  if (!targetDateInput) {
    targetDateInput = dateFormMaker();
  }
  dateFormMaker();
  localStorage.setItem("saved-date", targetDateInput);
  container.style.display = "flex";
  messagecontainer.style.display = "none";
  setClearInterval();
  counterMaker(targetDateInput);
  const interbalId = setInterval(() => {
    counterMaker(targetDateInput);
  }, 1000);
  interbalIdArr.push(interbalId);
};

const setClearInterval = function () {
  for (let i = 0; i < interbalIdArr.length; i++) {
    clearInterval(interbalIdArr[i]);
  }
};

const resetTimer = function () {
  localStorage.removeItem("saved-date");
  container.style.display = "none";
  messagecontainer.style.display = "flex";
  messagecontainer.innerHTML = "<h3>D-day를 입력해주세요.</h3>";
  setClearInterval();
};

if (savedDate) {
  starter(savedDate);
} else {
  container.style.display = "none";
  messagecontainer.innerHTML = "<h3>D-day를 입력해주세요.</h3>";
}
