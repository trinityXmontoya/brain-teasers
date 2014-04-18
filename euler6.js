 // PROJECT EULER 6
// Problem: Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


var sum1 = sum2 = 0;

for (var i=1; i<=100; i++) {
  sum1 += (i * i)
  sum2 += i;
}

console.log((sum2*sum2) - sum1)
