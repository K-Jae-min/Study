let persons = [
  { name: "철수", age: 17 },
  { name: "영희", age: 22 },
  { name: "도우너", age: 5 },
  { name: "그루트", age: 65 },
  { name: "도비", age: 3 },
];
// undefined
for (let count = 0; count < persons.length; count++) {
  if (persons[count].age >= 19) {
    console.log("성인입니다.");
  } else {
    console.log("미성년자입니다.");
  }
}
// VM4765:6 미성년자입니다.
// VM4765:4 성인입니다.
// VM4765:6 미성년자입니다.
// VM4765:4 성인입니다.
// VM4765:6 미성년자입니다.
// undefined
for (let count = 0; count < persons.length; count++) {
  if (persons[count].age >= 19) {
    console.log(persons[count].name + "님은 성인입니다.");
  } else {
    console.log(persons[count].name + "님은 미성년자입니다.");
  }
}
// VM4773:6 철수님은 미성년자입니다.
// VM4773:4 영희님은 성인입니다.
// VM4773:6 도우너님은 미성년자입니다.
// VM4773:4 그루트님은 성인입니다.
// VM4773:6 도비님은 미성년자입니다.
// undefined

let fruits = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];
// undefined
for (let count = 0; count < fruits.length; count++) {
  console.log(fruits[count].number + " " + fruits[count].title);
}

// VM999:2 1 레드향
// VM999:2 2 샤인머스켓
// VM999:2 3 산청딸기
// VM999:2 4 한라봉
// VM999:2 5 사과
// VM999:2 6 애플망고
// VM999:2 7 딸기
// VM999:2 8 천혜향
// VM999:2 9 과일선물세트
// VM999:2 10 귤
// undefined
for (let count = 0; count < fruits.length; count++) {
  console.log(`${fruits[count].number} ${fruits[count].title}`);
}
// VM1009:2 1 레드향
// VM1009:2 2 샤인머스켓
// VM1009:2 3 산청딸기
// VM1009:2 4 한라봉
// VM1009:2 5 사과
// VM1009:2 6 애플망고
// VM1009:2 7 딸기
// VM1009:2 8 천혜향
// VM1009:2 9 과일선물세트
// VM1009:2 10 귤
// undefined
for (let count = 0; count < fruits.length; count++) {
  console.log(`과일 차트 ${fruits[count].number}위는 ${fruits[count].title}입니다.`);
}
// VM1023:2 과일 차트 1위는 레드향입니다.
// VM1023:2 과일 차트 2위는 샤인머스켓입니다.
// VM1023:2 과일 차트 3위는 산청딸기입니다.
// VM1023:2 과일 차트 4위는 한라봉입니다.
// VM1023:2 과일 차트 5위는 사과입니다.
// VM1023:2 과일 차트 6위는 애플망고입니다.
// VM1023:2 과일 차트 7위는 딸기입니다.
// VM1023:2 과일 차트 8위는 천혜향입니다.
// VM1023:2 과일 차트 9위는 과일선물세트입니다.
// VM1023:2 과일 차트 10위는 귤입니다.
// undefined
