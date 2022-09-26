//정수들의 절대값을 차례대로 담은 정수배열 absolutes 만들기
//이 정수들의 부호를 차례대로 담은 불리언 배열 signs 매개변수 만들기
// true면 양수 false면 음수

//for문으로 반복문 작성 후 if문 으로 조건문

function solution(absolutes, signs) {
    let sum=0; // 더하거나 뺀 값을 저장해줄 함수 지정
    for (i=0; i<absolutes.length; i++){ // absolutes의 길이만큼 반복해줄 for문
        if (signs[i]==true){ //signs의 i번째 값이 true라면 
            sum+=absolutes[i];//sum에 absolutes의i번째 숫자를 더해라
        }else if(signs[i]==false){//false라면
            sum-=absolutes[i]  //뺀 값을 저장해라
        }
    }
    return(sum)//sum에 저장된 값을 반환해준다.
}

absolutes=[1,2,3,4,5,6,7,8,9]
signs=[true,false,true,false,true,true,true,true,true]