let k = Number(prompt("국어 점수를 입력해주세요")) 
let s = Number(prompt("수학 점수를 입력해주세요"))
let c = Number(prompt("과학 점수를 입력해주세요"))
alert(`시험점수의 평균은 ${(k+s+c)/3}점입니다.`);

let list= "";
list +=`<table><tr><th>국어점수</th><th>수학점수</th><th>과학점수</th><th>평균</th><th>결과</th>`;
list +=`<tr><td>${k}점</td><td>${s}점</td><td>${c}점</td><td>${(k+s+c)/3}점</td><td>${k>=70 && s>=50 && c>=80}</td></table>`;
list +=`평균점수와는 상관없이국어점수 70점이상 수학점수 50점이상 과학점수 80점이상일때만 시험통과입니다.`
document.write(list)