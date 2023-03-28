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

// Switching from if else to switch.
// Using if else.
function chainToSwitch(val) {
    let answer = "";

    if (val === "bob") {
        answer = "Marley";
    } else if (val === 42) {
        answer = "The Answer";
    } else if (val === 1) {
        answer = "There is no #1";
    } else if (val === 99) {
        answer = "Missed me by this much!";
    } else if (val === 7) {
        answer = "Ate Nine";
    }

    return answer;
}

chainToSwitch(7);

// Using switch.
function chainToSwitch(val) {
    let answer = "";

    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }

    return answer;
}

chainToSwitch(7);
// End of switching to switch.