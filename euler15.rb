#PROJECT EULER 15
# Description: Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
# Problem: How many such routes are there through a 20×20 grid?

class Lattice

  #factorial method
  def self.factorial(num)
    num == 0 ? 1 : num * factorial(num-1)
  end

  #method for returning 'n' row of pascal's triangle
  def self.pascal(n)
    (0..n).collect {|r| factorial(n) / (factorial(r)* (factorial(n-r)))}
  end

  #method for finding a pascal's triangle combination of two numbers
  def self.combinations(num1,num2)
    pascal(2*num1)[num2]
  end

end

#pascal's triangle allows for the calculation of combinations, here is the number of routes possible in a 20 * 20 grid
puts Lattice.combinations(20,20)
