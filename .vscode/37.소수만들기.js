function solution(nums) {
  var answer = 0;

  for (var x = 0; x < nums.length; x++) {
    for (var y = x + 1; y < nums.length; y++) {
      for (var z = y + 1; z < nums.length; z++) {
        if (nums[x] + nums[y] + (nums[z] % 2) != 0) {
          if (primeNumber(nums[x] + nums[y] + nums[z])) {
            answer++;
          }
        }
      }
    }
  }

  return answer;
}

function primeNumber(num) {
  var bool = true;
  var i = Math.floor(Math.sqrt(num));
  for (var x = 2; x <= i; x++) {
    if (num % x == 0) {
      bool = false;
      break;
    }
  }
  return bool;
}
