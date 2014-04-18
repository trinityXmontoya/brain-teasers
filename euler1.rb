#PROJECT EULER 1
# Description: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
# Problem: Find the sum of all the multiples of 3 or 5 below 1000.

puts (1...1000).select{|x| x%3 == 0 || x%5 == 0 }.reduce(:+)
