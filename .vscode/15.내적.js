// a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]
// 입력 받은 값 공식에 대입해서 리턴 해주기


function solution(a, b) {
    let answer = 0;
    for(let i=0; i < a.length; i++){
        answer+=a[i]*b[i] //a의i번째 배열과 b의 i번째 배열을 곱한 값을 더해서 저장한다.
    }return(answer)
}