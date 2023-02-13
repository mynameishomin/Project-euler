// 피보나치 수열에서 4백만 이하이면서 짝수인 항의 합은?

const getFibonacci = (max) => {
  const fibonacci = [0, 1];

  return (() => {
    while (fibonacci.at(-1) + fibonacci.at(-2) < max) {
      fibonacci.push(fibonacci.at(-1) + fibonacci.at(-2));
    }
    return fibonacci;
  })();
};

let sum = 0;
const fibonacci = getFibonacci(4000000);
fibonacci.forEach((number) => {
  number % 2 === 0 ? (sum += number) : null;
});
console.log(sum);
