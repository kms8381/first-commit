//a,b가 주어졌을때 a부터b까지의 합 구하기
//  a	b	return
// 3	5	12
// 3	3	3
// 5	3	12



function sum(a,b){
    let x = 0
    if(a<=b){
        for(let i=a; i<=b; i++){
            x += i

        }
    }else {
        for(let j=b; j<a; i++){
            x+=j
        }
    }
    return x;
}
let xy=sum(3,5)
console.log(xy);