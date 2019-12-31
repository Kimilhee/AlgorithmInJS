// Find the greatest common divisor of n numbers
function generalizedGCD(num, arr) {
  const lowest = Math.min(...arr)

  for (let factor = lowest; factor > 1; factor--) {
    if (arr.every(it => it % factor === 0)) {
      return factor
    }
  }

  return 1
}

console.log(generalizedGCD(null, [2, 4, 6, 8, 10]))
console.log(generalizedGCD(null, [3, 12, 6, 9, 18]))
console.log(generalizedGCD(null, [12, 6, 9, 18]))
