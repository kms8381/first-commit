function solution(n) {
    let str_num = String(n); //숫자열 n을 문자열로 변경
    let spl_num = str_num.split("").reverse().map((x) => parseInt(x))
    // 문자열을 배열로 변경 후, 순서를 거꾸로 바꾸고, 인자를 정수로 변경

    //한줄로 줄이기 전 코드
    // let revers_num = spl_num.reverse();// 순서 반전
    // revers_num=revers_num.map((x)=>parseInt(x)); 인자 정수로 변경
    return spl_num
}