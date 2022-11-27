//길이가 n이고, "수박수박수박수..."패턴을 리턴하는 함수
//짝수 일 때는 박, 홀수 일 때는 수



function solution(n) {
  let answer = "" // 빈 변수 선언
  for(let i=1; i<=n; i++){ // i=1부터 변수n까지 반복
  i%2===0 ? answer+="박" : answer+="수" // 짝수 일 경우 "수" 홀수면"박"
  }
  return answer;
}
