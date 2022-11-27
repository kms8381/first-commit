//입력된 수가 짝수라면 2로 나눈다.
// 홀수라면 3을 곱하고 1을 더한다.
//1이 될 때 까지 반복
//500번 반복 하면 -1을 리턴

function solution(num) {
    let count = 0;

    while (count < 500) { //count가 499가 될 때 까지 반복
        if (num === 1) { //num가 1이라면
            return count; //count를 리턴
        }
        count ++; // 카운트값 +1
        num = num % 2 === 0 ? num /2 : num *3 +1;
        //num= num이 짝수 일 때 num/2를 하고
        //홀수이면 num*3+1 을 한다.
    }

    return -1;
}
