// eslint-disable-next-line id-length
function fibonacci(n) {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// 1 | 0 + 1 | 1 + 1 | 1 + 2 | 2 + 3 | 3 + 5
// Examples
console.log(fibonacci(1) === 1);       // 1
console.log(fibonacci(2) === 1);       // 1
console.log(fibonacci(3) === 2);       // 2
console.log(fibonacci(4) === 3);       // 3
console.log(fibonacci(5) === 5);       // 5
console.log(fibonacci(12) === 144);      // 144
console.log(fibonacci(20) === 6765);      // 6765
