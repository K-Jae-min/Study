let classmates = ["철수", "영희", "훈이"];
// undefined
classmates;
// (3) ['철수', '영희', '훈이']
classmates[0];
// '철수'
classmates[1];
// '영희'
classmates[2];
// '훈이'
classmates.includes("훈이");
// true
classmates.includes("영구");
// false
classmates.length;
// 3
classmates.push("영구");
// 4
classmates.includes("영구");
// true
classmates;
// (4) ['철수', '영희', '훈이', '영구']
classmates.pop();
// '영구'
