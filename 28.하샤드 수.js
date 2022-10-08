//정수 x가 x의 일의자리 숫자와 십의자리 숫자의 합으로 나누었을 때
//나누어 떨어지면 true, 나머지가 나오면 false 

function solution(x) {
    let sum = 0;
    let arr = String(x).split("")
    for (let i=0; i<arr.length;i++){
        sum += Number(arr[i]);
    }
    return x%sum ==0? true : false;

}