// This script is showing that the function will always return undefined if there is no return value.
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum += 5;
  // Always returns when no return value.
  //return undefined;
}

addThree();
addFive();