// // 피보나치 수열에서 4백만 이하이면서 짝수인 항의 합
// let sum = 0;
// let num1 = 1;
// let num2 = 1;
// let temp = 0;
// while (num1 + num2 < 4000000) {
//   temp = num1 + num2;
//   num1 = num2;
//   num2 = temp;
//   if (temp % 2 === 0) sum += temp;
// }
// console.log(sum);

// let sum = 0;
// const fibonacci = [0, 1];
// while (fibonacci.at(-1) + fibonacci.at(-2) < 4000000) {
//   fibonacci.push(fibonacci.at(-1) + fibonacci.at(-2));
//   if (fibonacci.at(-1) % 2 === 0) sum += fibonacci.at(-1);
// }
// console.log(sum);
// console.log(fibonacci);

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
console.log(fibonacci);

// [
//   0,       1,       1,       2,      3,
//   5,       8,      13,      21,     34,
//  55,      89,     144,     233,    377,
// 610,     987,    1597,    2584,   4181,
// 6765,   10946,   17711,   28657,  46368,
// 75025,  121393,  196418,  317811, 514229,
// 832040, 1346269, 2178309, 3524578
// ]
