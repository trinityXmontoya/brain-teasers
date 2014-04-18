#one-line ROT-13 solution that works on sentences
def encode(word)
plain = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
cipher =["n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m"]

puts word.downcase.tr(plain.to_s,cipher.to_s)

end

encode("Hello")
encode("McKenneth")
encode("swagatron")
encode("fjntngeba")
encode("hey dog")
encode("hey, dog")
encode("hey, dog!")
