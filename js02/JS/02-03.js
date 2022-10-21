let list = "";
list += `<h3>불 자료형으로 변환</h3>`;
list += `<table><tr><td>Boolean(0)</td><td>${Boolean(0)}</td></tr>`;
list += `<tr><td>Boolean(NaN)</td><td>${Boolean(NaN)}</td></tr>`;
list += `<tr><td>Boolean("")</td><td>${Boolean("")}</td></tr>`;
list += `<tr><td>Boolean(null)</td><td>${Boolean(null)}</td></tr></table>`;
document.write(list);