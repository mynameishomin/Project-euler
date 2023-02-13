// 1000보다 작은 자연수 중에서 3 또는 5의 배수를 모두 더하면?

let sum = 0;
for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) sum += i;
}
console.log(sum);
