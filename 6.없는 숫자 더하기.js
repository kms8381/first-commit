// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한수를 return 

//배열에 없는 숫자 찾기
//배열에 없는 수를 더해주는 식 만들기
//더한 값 반환 해주기


function solution(numbers) {// 함수 선언
    let count = 0           //더한 값을 저장 할 변수 선언
    for(let i=0; i<10; i++){ //1부터 9까지 차례대로 반복 하는데
        if(!(numbers.includes(i)))count+=i  //numbers 리스트에 i와 같은 값이 없다면  
                                            //i를 더한 값을 count에 저장 한다. 
    }
    return count
}

numbers=[1, 2, 3, 4, 6, 7, 9]
solution(numbers)


