function fibonacci(fibNum) {
  let cur = 1;
  let last = 0;
  for (let count = 1; count < fibNum; count++) {
    [cur, last] = [cur + last, cur];
  }
  return cur;
}

// Examples
console.log(fibonacci(20) === 6765);       // 6765
console.log(fibonacci(50) === 12586269025);       // 12586269025
console.log(fibonacci(75) === 2111485077978050);       // 2111485077978050
