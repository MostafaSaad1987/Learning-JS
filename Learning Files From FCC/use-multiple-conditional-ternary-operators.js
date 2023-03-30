// This script has nested ternary operators, replacing the if else if.
function checkSign(num) {
    return num > 0 ? "positive" :
    num < 0 ? "negative" :
    "zero";
}

checkSign(10);