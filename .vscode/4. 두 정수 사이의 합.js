//a,b가 주어졌을때 a부터b까지의 합 구하기
//  a	b	return
// 3	5	12
// 3	3	3
// 5	3	12



function sum(a,b){ // 함수 선언
    let x = 0 // 지역변수 선언
    if(a<=b){ //조건문 설정
        for(let i=a; i<=b; i++){ //반복문 설정
            x += i // x에 i를 더한 값을 재할당 
        }
    }else {
        for(let j=b; j<a; i++){
            x+=j // x에 j를 더한 값을 재할당
        }
    }
    return x; //x 값을 반환
}
let xy=sum(3,5)
console.log(xy);