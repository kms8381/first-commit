function solution(new_id) {
  var answer = new_id.toLowerCase();
  var allowed = "abcdefghijklmnopqrstuvwxyz0123456789-_.";

  for (var i = 0; i < answer.length; i++) {
    if (allowed.indexOf(answer.charAt(i)) < 0) {
      answer = answer.substring(0, i) + answer.substring(i + 1);
      i--;
    }
  }
  for (var i = 0; i < answer.length; i++) {
    if (answer.charAt(i) == "." && answer.charAt(i) == answer.charAt(i + 1)) {
      answer = answer.substring(0, i) + answer.substring(i + 1);
      i--;
    }
  }
  if (answer.charAt(0) == ".") answer = answer.substring(1);
  if (answer.charAt(answer.length - 1) == ".")
    answer = answer.substring(0, answer.length - 1);
  if (answer.length == 0) answer = "aaa";
  if (answer.length > 15) answer = answer.substring(0, 15);
  if (answer.charAt(answer.length - 1) == ".")
    answer = answer.substring(0, answer.length - 1);
  while (answer.length < 3) answer += answer.charAt(answer.length - 1);

  return answer;
}
