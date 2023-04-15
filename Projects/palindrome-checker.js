function palindrome(str) {

  let pal = false;

  let alphabetRegexV2 = /[^\W_]/g;
  let result = str.toLowerCase();
  result = result.match(alphabetRegexV2);
  console.log(result);

  for (let i = 0; i < result.length; i++) {
    if (result[i] != result[result.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("_eye"));