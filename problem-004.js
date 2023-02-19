// 세자리 수를 곱해 만들 수 있는 가장 큰 대칭수는?

const reverseStr = (str) => {
  return str.split("").reverse().join("");
};

const isPalindrome = (n) => {
  return String(n) === reverseStr(String(n));
};

const problem_4 = () => {
  const palindromeArr = [];
  for (let i = 100; i < 1000; i++) {
    for (let j = i; j < 1000; j++) {
      isPalindrome(i * j) ? palindromeArr.push(i * j) : null;
    }
  }
  return Math.max(...palindromeArr);
};

console.log(problem_4());
