calcSum(10);
function calcSum(n) {
  sum = 0;  // 전역 변수
  
  for(let i = 1; i < n + 1; i++) {
    sum += i;
  }  
}


console.log(sum);  // 전역 변수 사용