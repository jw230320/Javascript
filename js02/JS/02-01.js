let number = prompt("true 또는 false를 입력해주세요");
let list ="";
list +=`<h2>논리연산자</h2>`;
list +=`<table><tr><th>&&연산</th><th>연산</th><th>값</th><th>결과</th><tr>`;
list +=`<tr><td>${number}</td><td> && </td><td>false</td><td>  ${false && number}</td></tr>`;
list +=`<tr><td>${number}</td><td> && </td><td>true</td><td>  ${true && number}</td></tr>`;
list +=`<tr><th>||연산</th><th>연산</th><th>값</th><th>결과</th><tr>`;
list +=`<tr><td>${number}</td><td> || </td><td>false</td><td>  ${false || number}</td></tr>`;
list +=`<tr><td>${number}</td><td> || </td><td>true</td><td>  ${true || number}</td></tr>

</table>`;
document.write(list);