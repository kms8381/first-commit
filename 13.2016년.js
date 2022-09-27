

function solution(a, b) {
    const monthDay = [31,29,31,30,31,30,31,31,30,31,30,31]//1월부터 일 수
    const weekDay = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]
    //2016.1.1일은 금요일 weekDay[0]은 목요일부터 시작

    let days = b 
    for(let i=0 ; i<a-1 ; i++) //입력 받은 월 수가 5월 이라면
        days += monthDay[i]; //1,2,3,4월의 일 수를 입력 받은 b 값에 더한 후

    return weekDay[days%7];//7로 나눈 나머지의 배열 값을 반환해준다.
}