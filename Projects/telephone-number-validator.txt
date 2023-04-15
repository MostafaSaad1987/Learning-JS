function telephoneCheck(str) {
  let regex = /\d/g;
  let checkArr = [...str];
  if (checkArr[0] == "-") {
    return false;
  }
  for (let i = 0; i < checkArr.length; i++) {
    if (checkArr[i] == "?") {
      return false;
    } else if(checkArr[i] == "(" && checkArr[i + 4] != ")") {
      return false;
    } else if(checkArr[i] == ")" && checkArr[i - 4] != "(") {
      return false;
    } else if (checkArr[i] == "-" && checkArr[i + 3] == "-") {
      return false;
    }else if(checkArr[i] == "-" && checkArr[i + 4] == "-") {
      break;
    } else if (checkArr[i] == "-" && regex.test(checkArr[i + 1] && checkArr[i + 2] && checkArr[i + 3] && checkArr[i + 4])) {
      break;
    } else if(checkArr[i] == "-" && checkArr[i + 4] != "-") {
      return false;
    }
  }
  let num = str.match(regex);
  num = num.join("");
  if(num.length > 11 || num.length < 10) {
    return false;
  } else {
    if(num.length == 11) {
      if(num[0] != 1) {
        return false;
      }
    }
  }
  return true;
}

console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("55 55-55-555-5"));