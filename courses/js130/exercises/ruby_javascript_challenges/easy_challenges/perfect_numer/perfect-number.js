class PerfectNumber {
  static aliquotSum(num) {
    let sum = 0;
    const stopNum = Math.floor(num / 2);
    for (let curNum = 1; curNum <= stopNum; curNum++) {
      if ((num % curNum) === 0) sum += curNum;
    }
    return sum;
  }
  static classify(num) {
    if (num < 1) throw new Error('Provided number must be > 1');
    let label;
    const aliquotSum = PerfectNumber.aliquotSum(num);
    switch (true) {
      case (aliquotSum < num):
        label = 'deficient';
        break;
      case (aliquotSum === num):
        label = 'perfect';
        break;
      default:
        label = 'abundant';
    }
    return label;
  }
}

module.exports = PerfectNumber;
