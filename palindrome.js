function removePunc(string){
  string=string.replace(/[^\w\s]/g,'');
};

function removeWhitespace(string){
  string.replace(/\s/g,'');
};

function palindromeChecker(string){
  string= removeWhitespace(removePunc(string)).toLowerCase();
  if(string[0] === string[string.length-1]){
    var reverse = string.split("").reverse().join("");
    return (string === reverse) ? true : false;
  }
    else{return false};
};

palindromeChecker("racecar");
palindromeChecker("racecar!");
palindromeChecker("racecars");
palindromeChecker("Sore was I ere I saw Eros.");
palindromeChecker("Noel sees Leon.");
palindromeChecker("Draw O Caesar, erase a coward.");
palindromeChecker("baby");
palindromeChecker("babb");
palindromeChecker("Draw O Caesar, erase a coward..");
