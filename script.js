var thisIsAVariable;
thisIsAVariable = 8;
let thisIsAnother = "Yes";
const thisIsAConstant = "k0Ns7";

console.log(thisIsAVariable);

// Queue. Adds an element to the back, removes one from the front.
function nextInLine(arr, item) {
    arr.push(item);
    item = arr.shift();
    return item;
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
// End of Queue.