let s = prompt("2~9사이의 숫자를입력해주세요")
alert(`${s}단표 보여드리겠습니다.`)
let a=1;
let list ="";
list += `<h2>구구단표</h2>`
list += `<table><tr><td>${s}</td><td>x</td><td>1</td><td>=</td><td>${s*a++}</td></tr>`;
list += `<tr><td>${s}</td><td>x</td><td>2</td><td>=</td><td>${s*a++}</td></tr>`;
list += `<tr><td>${s}</td><td>x</td><td>3</td><td>=</td><td>${s*a++}</td></tr>`;
list += `<tr><td>${s}</td><td>x</td><td>4</td><td>=</td><td>${s*a++}</td></tr>`;
list += `<tr><td>${s}</td><td>x</td><td>5</td><td>=</td><td>${s*a++}</td></tr>`;
list += `<tr><td>${s}</td><td>x</td><td>6</td><td>=</td><td>${s*a++}</td></tr>`;
list += `<tr><td>${s}</td><td>x</td><td>7</td><td>=</td><td>${s*a++}</td></tr>`;
list += `<tr><td>${s}</td><td>x</td><td>8</td><td>=</td><td>${s*a++}</td></tr>`;
list += `<tr><td>${s}</td><td>x</td><td>9</td><td>=</td><td>${s*a++}</td></tr></table>`;
document.write(list);
