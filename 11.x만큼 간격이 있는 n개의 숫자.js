//정수 x와 자연수n을 선언
//x부터 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴


function solution(x, n){ 
    let answer =[]; // 배열을 저장 할 변수 선언
    for(i=1; i<=n; i++){ 
        answer.push(x*i)//push 메서드를 이용해서 배열 안에 x*i를 추가
    }
    return(answer)
}