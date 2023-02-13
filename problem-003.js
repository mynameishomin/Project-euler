// 600851475143의 소인수 중에서 가장 큰 수는?

// 소수 판별 함수
const isPrime = (number) => {
  // 1은 소수가 아님
  if (number === 1) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

// 되는데 시간 오래 걸림
const primeFactorization = (number) => {
  let isFinish = true;
  const result = [];
  while (isFinish) {
    let i = 2;
    if (!isPrime(i)) {
      continue;
    }
    if (number % i === 0) {
      number /= i;
      result.push(i);
      console.log(number);
    } else {
      i++;
    }
    if (i * i > number) {
      isFinish = false;
    }
  }
  return result;
};

// console.log(primeFactorization(600851475143));
// console.log(isPrime(2));

const primeFactors = (n) => {
  const answer = [];
  // 2로 나눠지면 계속 나누기
  while (n % 2 === 0) {
    answer.push(2);
    n /= 2;
  }

  // 3부터 루트n까지 나눌 수 있으면 나누기
  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      answer.push(i);
      n /= i;
    }
  }

  // 루트n부터 n까지 소수인 경우 처리
  if (n > 2) answer.push(n);
  return answer;
};

console.log(primeFactors(600851475143));
