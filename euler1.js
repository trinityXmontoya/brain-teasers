 // PROJECT EULER 1
 // Description: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 // Problem: Find the sum of all the multiples of 3 or 5 below 1000.

// Idea 1
var res=0;
for ( var i=0; i<1000; i++) {
  if ( i%3==0 || i%5==0 ) { res+=i; }
};

// Idea 2
var res=0;
for ( var i=0; i<1000; i++) {
  if ( !(i%3) || !(i%5) ) { res+=i; }
};

console.log(res);
