function isPalindrome(word) {
  word = word.toLowerCase();
  const length = word.length;

  for (let i = 0; i < length / 2; i++) {
    if (word[i] !== word[length - 1 - i]) {
      return false;
    }
  }

  return true;
}

/* 
  Add your pseudocode here
 1.Convert the word to lowercase
 2.Get the length of the word
 3.Iterate from the beginning to the halfway point of the word
 4.Compare the character at index i with the corresponding character from the end
 5.It is not a palindrome will return false
 6.All characters match, so it is a palindrome. it will return true

*/

/*
  Add written explanation of your solution here
  1. Convert the input word to lowercase.
  2. Reverse the word.
  3. If the reversed word is equal to the original word, return true (it is a palindrome).
  4. Otherwise, return false (it is not a palindrome).
  This solution checks if a word is a palindrome by comparing the reversed version of the word with the original word.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log(isPalindrome("level"))
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
