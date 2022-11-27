// function solution(arr) {
//     let revers_num = arr.sort().shift();
//     let final_num = arr.reverse();
//     return arr.length<=0? [-1] : final_num
// }

function solution(arr) { 
    let min_num = Math.min(...arr) // 배열 arr에서 가장 작은 수를 찾음.
    let find_arr = arr.indexOf(min_num)//가장 작은 수의 index를 찾음.
    let del_num = arr.splice(find_arr,1)//가장 작은 수의 index를 삭제.
    let answer = arr.length<=0? [-1] : arr
    //arr의 길이가 0이하라면 -1을 반환하고, 이상이라면 arr을 반환
    return answer;
}