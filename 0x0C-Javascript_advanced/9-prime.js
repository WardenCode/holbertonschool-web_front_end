function countPrimeNumbers () {
  let primes = 0;
  const isPrime = Array(101);
  for (let i = 2; i <= 100; i++) {
    isPrime[i] = true;
  }

  for (let i = 2; i * i <= 100; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= 100; j += i) {
        isPrime[j] = false;
      }
    }
  }

  for (let i = 2; i <= 100; i++) {
    if (isPrime[i]) primes++;
  }

  return primes;
}

const init = performance.now();
countPrimeNumbers();
const end = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${end - init} milliseconds.`);
