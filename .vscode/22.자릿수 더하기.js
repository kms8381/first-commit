function solution(n){
    let answer = 0; // 더한 값 저장
    let b = String(n); // 정수n을 문자열로 변경
    let a = b.split("");//문자열 b를 배열로 변환
       for(let i = 0; i<a.length; i++){
       answer += Number(a[i]) //배열 a의 i번째를 정수로 변경 후 +
   }return answer;
   
   }