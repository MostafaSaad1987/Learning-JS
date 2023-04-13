// Checks for the word "Hello" using the test method.
// test returns true or false, and is applied to the regex expression with the string passed as a parameter.
// Returns true.
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// Checks for any of the words between the or statments.
// Returns true.
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

// Checks if the letter exists or not. Implies that the letter isn't important, and is optional.
// In this example it checks for the U letter.
// Returns true.
let favWord = "favorite";
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);

// Checks for more than the first match.
// This is done by utilizing the gi flag.
// g is for global, to check the whole string.
// i is to make the search case-insensitive.
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line



// Checks for the exact match of a word.
// In this example it checks for the word "coding".
// match returns the word, returns null if not found.
// Returns ["coding"];
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

// \d check for numbers. g flag means global, on the whole string.
// Returns 4.
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;

// \D checks for non-numerics in the string.
// Returns 17.
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length;

// \s is for whitespace.
// Returns an array with spaces.
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);