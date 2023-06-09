function convertToRoman(num) {
  let rom = "";
  while (num > 0) {
    if (num >= 1000) {
      rom = rom + "M";
      num -= 1000;
    } else if (num >= 900) {
      rom = rom + "CM";
      num -= 900;
    } else if (num >= 500) {
      rom = rom + "D";
      num -= 500;
    } else if (num >= 400) {
      rom = rom + "CD";
      num -= 400;
    } else if (num >= 100) {
      rom = rom + "C";
      num -= 100;
    } else if (num >= 90) {
      rom = rom + "XC";
      num -= 90;
    } else if (num >= 50) {
      rom = rom + "L";
      num -= 50;
    } else if (num >= 40) {
      rom = rom + "XL";
      num -= 40;
    } else if (num >= 10) {
      rom = rom + "X";
      num -= 10;
    } else if (num >= 9) {
      rom = rom + "IX";
      num -= 9;
    } else if (num >= 5) {
      rom = rom + "V";
      num -= 5;
    } else if (num >= 4) {
      rom = rom + "IV";
      num -= 4;
    } else if (num >= 1) {
      rom = rom + "I";
      num -= 1
    } else {
      num--;
    }
  }
  return rom;
}

convertToRoman(36);

console.log(convertToRoman(798));