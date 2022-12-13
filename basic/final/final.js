const changeFocus1 = () => {
  let phone1 = document.getElementById("p1").value;
  if (phone1.length === 3) {
    document.getElementById("p2").focus();
  }
};

const changeFocus2 = () => {
  let phone1 = document.getElementById("p2").value;
  if (phone1.length === 4) {
    document.getElementById("p3").focus();
  }
};

const checkValidation = function () {
  let p1 = document.getElementById("p1").value;
  let p2 = document.getElementById("p2").value;
  let p3 = document.getElementById("p3").value;
  if (p1 && p2 && p3) {
    document.getElementById("submit").disabled = false;
  } else {
    document.getElementById("submit").disabled = true;
  }
};

let isStarted = false;

let auth = () => {
  if (isStarted === false) {
    isStarted = true;
    document.getElementById("finish").disabled = false;
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("target").innerText = token;

    let time = 3;
    let timer;

    timer = setInterval(function () {
      if (time >= 0) {
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2, "0");
        document.getElementById("timer").innerText = min + ":" + sec;
        time = time - 1;
      } else {
        document.getElementById("finish").disabled = true;
        isStarted = false;
        clearInterval(timer);
      }
    }, 1000);
  } else {
  }
};

function finishBtn() {
  alert("인증이 완료되었습니다.");
}

const signupValidation = function () {
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let pw1 = document.getElementById("pw1").value;
  let pw2 = document.getElementById("pw2").value;
  if (email && name && pw1 && pw2) {
    alert("코드캠프 가입을 축하합니다.");
  } else {
    alert("입력정보를 다시 확인해 주세요.");
  }
};
