# scalable solution since you can enter any range
def largest_palindrome_product(range_begin=100, range_end=999)
max = 0
(range_end).downto(range_begin) do |i|
  (i).downto(range_begin) do |j|
    res = i * j
      if (res.to_s.reverse.to_i == res)
        max = [max,res].max
        break
        #since we are counting down, if res > max, then there would be no point in multiplying i by any values less than the                 current j in the inner loop so we break
      end
    end
  end
  return max
end

largest_palindrome_product
largest_palindrome_product(10,99) # => 9009
