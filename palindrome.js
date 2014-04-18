function removePunc(string){
  var punc = [".","?","!",":",";","-","—","(",")","[","]",",","’","“","”","/"]
  for (var i=0; i<punc.length; i++) {
      string=string.replace(punc[i],'');
    }
    return string;
};

function palindromeChecker(string){
  string=removePunc(string.replace(/\s/g,'')).toLowerCase();

  if(string[0] === string[string.length-1]){
    var reverse = string.split("").reverse().join("");
    return (string === reverse) ? true : false;
  }
    else{return false};
};

palindromeChecker("racecar");
palindromChecker("racecar!");
palindromeChecker("racecars");
palindromeChecker("Sore was I ere I saw Eros.");
palindromChecker("Noel sees Leon.");
palindromeChecker("Draw O Caesar, erase a coward.");
palindromeChecker("baby");
palindromeChecker("babb");
