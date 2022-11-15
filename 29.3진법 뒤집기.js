//자연수 n이 매개변수로 주어짐
//n을 3진법 상에서 앞뒤로 뒤집은 후
//다시 10진법으로 표현한 수를 반환

function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}
