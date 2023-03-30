// This script countsdowns using recursion.
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const newArr = countdown(n - 1);
        newArr.unshift(n);
        return newArr;
    }
}

console.log(countdown(5));