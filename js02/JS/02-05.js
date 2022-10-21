let dh = prompt("지금 달러환률은 얼마인가요?")
let gd = prompt("지금 가지고있는 달러는 얼마인가요?")

let list ="";
list += `<table><tr><th>환률</th><th>달러</th><th>원</th></tr>`;
list += `<tr><td>${dh}원</td><td>${gd}달러</td><td>${Number(dh) * Number(gd)}원</td></tr></table>`;
document.write(list);