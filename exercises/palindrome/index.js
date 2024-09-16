// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/* 1. Using the for-of loop */
/* 
function palindrome(str) {
  let rev = "";
  for (char of str) {
    rev = char + rev;
  }
  return rev === str;
}
 */

/* 2. Using the built-in reverse function */
/* 
function palindrome(str) {
  const rev = str.split("").reverse().join("");
  return rev === str;
}
 */

/* 3. Using a traditional for loop */
/* 
function palindrome(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev === str;
}
 */

/* 4. Using the reduce function */

function palindrome(str) {
  const rev = str.split("").reduce((rev, char) => char + rev, "");
  return rev === str;
}

module.exports = palindrome;
