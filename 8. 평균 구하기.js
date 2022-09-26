

function solution(arr){
    let answer = 0;  // 더한 값을 저장해줄 변수 선언
    for(let i=0; i<arr.length; i++){ // arr의 리스트 수 만큼 반복
        answer+=arr[i];     //arr의 i번째 값을 더해서 answer에 저장
    }
    return answer/arr.length; //answer에 arr의 길이만큼 나눈 값을 반환
}

let test = [1,2,3,4]
let a = solution(test)
console.log(a);