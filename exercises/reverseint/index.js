// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/* 1. Using the built-in reverse function */

function reverseInt(n) {
  const rev = parseInt(Math.abs(n).toString().split("").reverse().join(""));
  return Math.sign(n) * rev;
}

module.exports = reverseInt;
