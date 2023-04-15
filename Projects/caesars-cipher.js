function rot13(str) {
  let tempText = [...str];
  let currentChar = 0;
  let finalStr = "";

  for (let i = 0; i < tempText.length; i++) {

    currentChar = tempText[i].charCodeAt(0);

    if (currentChar >= 65 && currentChar <= 90) {
      if (currentChar + 13 > 90) {
        currentChar -= 26;
      }
      currentChar += 13;
    } else if (currentChar >= 97 && currentChar <= 121) {
      if (currentChar + 13 > 121) {
        currentChar -= 26;
      }
      currentChar += 13;
    }
    finalStr = finalStr + String.fromCharCode(currentChar);
  }

  return finalStr;
}

console.log(rot13("SERR PBQR PNZC"));

