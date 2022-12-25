function solution(x) {
  let strNum = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  let result = "";
  let curStr = "";
  for (let i = 0; i < x.length; i++) {
    if (!isNaN(x[i])) {
      result += x[i];
      continue;
    } else {
      curStr += x[i];
      if (strNum[curStr]) {
        result += strNum[curStr];
        curStr = "";
      }
    }
  }
  return Number(result);
}
