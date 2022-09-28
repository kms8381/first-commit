// arr의 각 원소 중 divisior로 나누어 떨어지는 값을 오름차순으로 배열
//나누어 떨어지는 원소가 하나도 없다면 -1을 반환
//return arr%divisor==0 ? 오름차순 배열 : -1

function solution(arr, divisor) {
    let answer = [];// 배열 저장 할 변수 선언

    for(let i = 0; i < arr.length; ++i) { //배열의 길이만큼 반복
        if(arr[i] % divisor == 0) answer.push(arr[i]); // arr을 divisor로
                                                      //나누었을 때 나머지가 0이면 answer 배열에 추가
    }

    return answer.length < 1 ? [-1] : answer.sort((a, b) => a - b);
}// 반복문이 끝났을 때 answer의 배열의 길이가 0이면 배열은 -1이 되고,
 // 아니라면 answer 배열 값을 오름차순으로 정렬한다(sort함수 사용)