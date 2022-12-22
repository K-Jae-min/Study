const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  // const dateFormat = inputYear + "-" + inputMonth + "-" + inputDate; 아래와 같은 표현
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;

  return dateFormat;
  // console.log(inputYear, inputMonth, inputDate);
};

const counterMaker = function () {
  const targetDateInput = dateFormMaker();
  const nowDate = new Date();
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;
  // 만약, remaining이 0이라면, 타이머가 종료 되었습니다. 출력
  if (remaining <= 0) {
    alert("타이머가 종료되었습니다.");
  } else if (isNaN(remaining)) {
    //만약, 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력
    alert("유효한 시간대가 아닙니다.");
  }

  const remainingDate = Math.floor(remaining / 3600 / 24);
  const remainingHours = Math.floor(remaining / 3600) % 24;
  const remainingMin = Math.floor(remaining / 60) % 60;
  const remainingSec = Math.floor(remaining) % 60;
  // console.log(remainingDate, remainingHours, remainingMin, remainingSec);
};
