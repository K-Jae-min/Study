if (profile.age >= 20) {
  consol.log("성인입니다.");
} else if (profile.age >= 8 && profile.age <= 19) {
  console.log("학생입니다.");
}
if (profile.age <= 7) {
  consol.log("어린이입니다.");
}
// VM2160:4 학생입니다.
// undefined
if (profile.age >= 20) {
  consol.log("성인입니다.");
} else if (profile.age >= 8) {
  console.log("학생입니다.");
}
if (profile.age <= 7) {
  consol.log("어린이입니다.");
}
// VM2188:4 학생입니다.
// undefined
if (profile.age >= 20) {
  consol.log("성인입니다.");
} else if (profile.age >= 8) {
  console.log("학생입니다.");
} else if (profile.age >= 0) {
  consol.log("어린이입니다.");
}
// VM2264:4 학생입니다.
// undefined
if (profile.age >= 20) {
  consol.log("성인입니다.");
} else if (profile.age >= 8) {
  console.log("학생입니다.");
} else if (profile.age >= 0) {
  consol.log("어린이입니다.");
} else {
  console.log("잘못 입력하셨습니다.");
}
// VM2446:4 학생입니다.
// undefined
