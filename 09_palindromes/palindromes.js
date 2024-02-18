function palindromes(thePalindrome) {
    let splittedPalindrome = thePalindrome.split("") 
    const word = splittedPalindrome.filter((letter) => ((letter >= "a" && letter <= "z" || letter >= "A" && letter <= "Z")) || ('0' <= letter && letter <= '9')).map(v => v.toLowerCase())
    for(let i = 0; i < word.length; i++){
      if(word[i] === word[word.length - 1 - i]){
        continue;
      } else {
        return false;
      }
    }
    return true
   };

// Do not edit below this line
module.exports = palindromes;

//  r a c e c a r