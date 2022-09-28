//문자열 내에 있는 p와 y의 개수를 비교해 p와 y의 개수가 
//같으면 true 다르면 false 값을 반환
//p와 y가 둘다 0이면 true 리턴


function solution(s){
    let a = Array.from(s); // Array.from 배열로 바꿔줌
    let num = 0;
    
    for(let i=0; i<=a.length; i++){
        if (a[i]=='P'){  //배열 a의 i번째가 대문자 P라면
            num++;      //num에 1을 더한 값을 저장한다.
        }if(a[i]=='p'){ //i번째가 소문자 p라면
            num++;      //num에 1을 더한 값을 저장한다.
        }if(a[i]=='Y'){ //i번째 가 대문자 y라면
            num--;      //1을 뺀다
        } if (a[i]=='y'){ //소문자 y라면
            num--; // 1을 뺀다
        }
}if(num==0){  // num 값이 0이라면
    return true  //true를 반환하고
}else{
    return false  // 아니라면 false를 반환한다.
}
}

//============================================================================
// 코드 간단화 

function solution(s){
    let a = s.toUpperCase(); // 문자열 a를 모두 대문자로 변경 한다 (toUpperCase)
    let b = Array.from(a); //변경된 문자열 a 를 배열로 변경한다.
    let num = 0;
    
    for(let i=0; i<=a.length; i++){
        a[i]=='P'? num++ : 0 // a의 i번째가 대문자 P라면 num에 1을 더한다
        a[i]=='Y'? num--: 0 // a의 i번째가 Y라면 num에 1을 뺀다
}if(num==0){ //num이 0이면
    return true //true를 반환하고
}else{
    return false //아니라면 false를 반환한다.
}
}