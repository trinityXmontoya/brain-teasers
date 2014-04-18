 // PROJECT EULER 1
 // Description: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 // Problem: Find the sum of all the multiples of 3 or 5 below 1000.

// Idea 1
var res=0;
for ( var index=0; index<1000; index++) {
  if ( index%3==0 || index%5==0 ) { res+=index; }
};

// Idea 2
var res=0;
for ( var index=0; index<1000; index++) {
  if ( !(index%3) || !(index%5) ) { res+=index; }
};

console.log(res);
// Answer: 233168
