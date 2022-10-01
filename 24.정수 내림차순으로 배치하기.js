function solution(n) {
    let str_num = String(n).split("").sort().reverse().join("");
    // n을 문자열로 바꾼 뒤, 배열로 변경 시키고 오름차순으로 정렬 후 배열을 거꾸로 뒤집은 다음 하나로 합친다.
    let num = Number(str_num); //str_num을 숫자열로 변경한다.
    return num;
}