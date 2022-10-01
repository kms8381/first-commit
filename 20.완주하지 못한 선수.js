//마라톤 참가 한 선수 이름 배열 participant
//완주 한 선수들 이름이 담긴 배열 completion 
//완주 못한 선수 이름을 return

//participant - completion


function solution(participant, completion) {
    var answer = '';
    participant.sort();
    completion.sort();
    for(var i = 0 ; i < participant.length; i++){
        participant[i] !== completion[i] ? (answer = participant[i]):0
        } return answer;
    }
    
