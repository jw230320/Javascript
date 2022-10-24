let a = Number(prompt('물건값은 얼마인가요?'));
let b = Number(prompt('낼돈은 얼마인가요?'));
let c = b-a;
let om = (c-c%50000)/50000;
let m = (c%50000-c%10000)/10000;
let oc =(c%10000-c%5000)/5000;
let cc =(c%5000-c%1000)/1000;
let ob =(c%1000-c%500)/500;
let bb =(c%500-c%100)/100; 
let s =(c%100-c%10)/10;
let list = "";

list += `<table><tr><th>받은돈</th><th>낼돈</th><th>거스름돈</th><th>잔돈</th><th>개수</th></tr>`;
list += `<tr><td>${b}</td><td>${a}</td><td>${c}</td><td>x</td><td>x</td></tr>`;
list += `<tr><td>x</td><td>x</td><td>x</td><td>50000원</td><td>${om}</td></tr>`;
list += `<tr><td>x</td><td>x</td><td>x</td><td>10000원</td><td>${m}</td></tr>`;
list += `<tr><td>x</td><td>x</td><td>x</td><td>5000원</td><td>${oc}</td></tr>`;
list += `<tr><td>x</td><td>x</td><td>x</td><td>1000원</td><td>${cc}</td></tr>`;
list += `<tr><td>x</td><td>x</td><td>x</td><td>500원</td><td>${ob}</td></tr>`;
list += `<tr><td>x</td><td>x</td><td>x</td><td>100원</td><td>${bb}</td></tr>`;
list += `<tr><td>x</td><td>x</td><td>x</td><td>10원</td><td>${s}</td></tr></table>`;





document.write(list);