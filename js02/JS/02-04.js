let r = prompt("반지름을 입력해주세요");
const pi = 3.14;

let list =" ";
list +=`<h2>반지름이 ${Number(r)}cm인 원의 둘레와 넓이는?</h2>`;
list +=`<div class="gong"></div>`;
list += `반지름이${Number(r)}cm인 원의 둘레는 ${2*pi*Number(r)}cm입니다.<br>`;
list += `반지름이${Number(r)}cm인 원의 넓이는 ${pi*Number(r)*Number(r)}cm입니다`;
document.write(list);