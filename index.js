
  // Write your algorithm here
  // Helper function to reverse a string
function reverseString(word) {
  return word.split("").reverse().join("");
}

// Main function to check if a word is a palindrome
function isPalindrome(word) {
  // Reverse the input string
  const reversedWord = reverseString(word);

  // Compare the reversed string to the input
  return word === reversedWord;
}
  


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
