// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/* 1. Using a traditional for loop */
/* 
function reverse(str) {
  let revstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revstr += str[i];
  }
  return revstr;
}
 */

/* 2. Using the built-in reverse function */
/* 
function reverse(str) {
  return str.split("").reverse().join("");
}
 */

/* 3. Using the for-of loop */
/* 
function reverse(str) {
  let rev = "";
  for (char of str) {
    rev = char + rev;
  }
  return rev;
}
 */

/* Using the reduce function */

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;
