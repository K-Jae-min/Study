const email = "kjaemin0122@naver.com";
// undefined
email.includes("@");
// true
email.split("@");
// (2) ['kjaemin0122', 'naver.com']
email.split("@")[0];
// 'kjaemin0122'
email.split("@")[1];
// 'naver.com'
let usermail = email.split("@")[0];
// undefined
usermail;
// 'kjaemin0122'
let company = email.split("@")[1];
// undefined
company;
// 'naver.com'
let maskingmail = [];
// undefined
maskingmail.push(usermail[0]);
// 1
maskingmail.push(usermail[1]);
// 2
maskingmail.push(usermail[3]);
// 3
maskingmail.push(usermail[4]);
// 4
maskingmail.pop;
// ƒ pop() { [native code] }
maskingmail.pop();
// 'm'
maskingmail.pop();
// 'e'
maskingmail.push(usermail[2]);
// 3
maskingmail.push(usermail[3]);
// 4
maskingmail;
// (4) ['k', 'j', 'a', 'e']
maskingmail.push("*");
// 5
maskingmail.push("*");
// 6
maskingmail.push("*");
// 7
maskingmail.push("*");
// 8
maskingmail;
// (8) ['k', 'j', 'a', 'e', '*', '*', '*', '*']
maskingmail.join("") + "@" + company;
// 'kjae****@naver.com'
let result = maskingmail.join("") + "@" + company;
// undefined
result;
// 'kjae****@naver.com'
result;
// 'kjae****@naver.com'
result;
// 'kjae****@naver.com'
