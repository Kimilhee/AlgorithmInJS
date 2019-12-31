// Find the greatest common divisor of two number
/* Euclidean algorithm */
function gcd(a, b) {
  while (b) {
    ;[a, b] = [b, a % b]
  }
  return a
}

console.log(gcd(101, 98))
