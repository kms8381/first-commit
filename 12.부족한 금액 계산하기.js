// 놀이기구의 원래 이용료는 price원
// 놀이기구를 n번째 이용한다면 이용료의 n배
// for문으로 n 반복, price*n
// 현재 money에서 얼마나 부족한지 반환

// money가 부족하지 않으면 0을 반환(if문)

function solution(price, money, count){
    let x=0
   
    for(i=1; i<=count; i++){
        x+=(price)*i // x에 이용료(price)에 i를 곱한 값을 더해서 저장한다.
    }if(money<x){   //money가 x보다 작다면
        return x-money // x-money 값을 리턴해주고
    }else{
        return 0 //아니라면 0을 리턴한다.
    }
}

//============================================================================ 
//코드 줄이기

function solution(price, money, count){
    let sum=0
    for(let i=1; i<=count; i++){
        sum+= (price*i) //sum에 price*i값을 더한 후 저장한다.
    } return money<sum ? sum-money : 0
}   //(조건)money<sum ? 
    //(true라면) sum-money 를 리턴 해주고 : 
    //(false라면)0을 리턴 해준다.      