// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/* 1. Using traditional for and if loops */
/* 
 function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
    
  for (char in charMap) {
    if (charMap[char] > max) {
      max = charMap[max];
      maxChar = char;
    }
  }
  return maxChar;
} 
 */

/* 2. Using the reduce function */

function maxChar(str) {
  const charMap = {};
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  return Object.keys(charMap).reduce((a, b) =>
    charMap[a] > charMap[b] ? a : b
  );
}

module.exports = maxChar;
