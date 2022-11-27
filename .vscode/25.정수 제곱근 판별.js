
function solution(n) {
    let sqrt_num = Math.sqrt(n); // sqrt_num 에 n의 제곱근을 저장
    return Number.isInteger(sqrt_num)? ((sqrt_num+1)*(sqrt_num+1)) : -1
    // sqrt_num이 정수라면 sqrt_num+1의 제곱근을 리턴하고
    // 정수가 아니라면 -1을 리턴한다.
}


//Math.sqrt 함수는 제곱근을 찾아주는 함수
//isInteger 함수는 정수가 맞는지 찾아주는 함수