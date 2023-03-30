// This script is about creating a range of numbers using recursion.
function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
    } else {
        const newArr = rangeOfNumbers(startNum, endNum - 1);
        newArr.push(endNum);
        return newArr;
    }
};

console.log(rangeOfNumbers(1, 5));