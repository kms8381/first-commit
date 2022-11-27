function solution(s) {
    let answer = ''
    a = s.split("")
    for(let i=0; i<s.length; i++){
        i%2==0 ? a[i].toUppercase() :a[i].toLowerCase();
    }return answer

}