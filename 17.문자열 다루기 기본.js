//문자열s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수
// s가 'a'234'라면 false, '1234'면 true 리턴

function solution(s){
    let b=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let a = Array.from(b)
    for (let i=0; i<= a.length; i++){
    return s.includes(a[i]) ? false : true 
    }
}