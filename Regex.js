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
result = petRegex.test(petString);

// Checks if the letter exists or not. Implies that the letter isn't important, and is optional.
// In this example it checks for the U letter.
// Returns true.
let favWord = "favorite";
let favRegex = /favou?rite/;
result = favRegex.test(favWord);

// Checks if a certain letter is repeated a specific number of times, no more, no less.
// In this example it checks if there are 4 'M's.
// Returns true;
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
result = timRegex.test(timStr);

// Checks if a certain letter is repeated greater than or equal number of times, no more, no less.
// In this example it checks if there are 4 or more 'z's.
// Returns true;
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
result = haRegex.test(haStr);

// Checks if a certain letter is repeated a certain number of times, no more, no less.
// In this example it checks if between 3 to 6 'h's.
// Returns true; 
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/;
result = ohRegex.test(ohStr);

// Checks for an expresion at the start of the string.
// Returns true;
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
result = calRegex.test(rickyAndCal);

// Checks for an expresion at the end of the string.
// Returns true;
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
result = lastRegex.test(caboose);

// . is a wildcard, aka anything goes.
// Returns true.
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
result = unRegex.test(exampleStr);

// Restricts created usernames to the rules written on the FCC challenge page.
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
result = userCheck.test(username);

// Checks for the existance of a middle name.
// Return true.
myString = "Eleanor Roosevelt";
myRegex = /(Franklin|Eleanor)\s?\D+?Roosevelt/g;
result = myRegex.test(myString);

//A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it.
// A positive lookahead is used as (?=...) where the ... is the required part that is not matched.
// Returns false.
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\w*\d{2})/;
result = pwRegex.test(sampleWord);



// Checks for more than the first match.
// This is done by utilizing the gi flag.
// g is for global, to check the whole string.
// i is to make the search case-insensitive.
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
result = twinkleStar.match(starRegex);

// Checks for the exact match of a word.
// In this example it checks for the word "coding".
// match returns the word, returns null if not found.
// Returns ["coding"].
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
result = extractStr.match(codingRegex);

// Checks for every letter in the alphabet.
// Returns an array with all the characters that appear.
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
result = quoteSample.match(alphabetRegex);

// Checks for characters that are not the ones in the brackets, because of the ^.
// Returns [" ", "b", "l", "n", "d", " ", "m", "c", "."].
quoteSample = "3 blind mice.";
myRegex = /[^aeiou0-9]/gi;
result = quoteSample.match(myRegex);

// Checks for all alphanumerics.
// Returns 31.
quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
result = quoteSample.match(alphabetRegexV2).length;

// \d check for numbers. g flag means global, on the whole string.
// Returns 4.
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
result = movieName.match(numRegex).length;

// \D checks for non-numerics in the string.
// Returns 17.
movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
result = movieName.match(noNumRegex).length;

// \s is for whitespace.
// Returns an array with spaces.
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
result = sample.match(countWhiteSpace);

// \S is for non-whitespaces.
// Returns an array with everything but the whitespace.
sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
result = sample.match(countNonWhiteSpace);

// Checks for characters that occur zero or more times.
// Returns Aaaaaaa, if it was A, it would have returned A, if it was only aaaaaa, then it would have returned null.
let chewieQuote = "This is Aaaaaaa test.";
let chewieRegex = /Aa*/;
result = chewieQuote.match(chewieRegex);

// Checks for everything that isn't alphanumeric.
// Returns 6.
quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
result = quoteSample.match(nonAlphabetRegex).length;

// Checks if any of the characters in the brackets.
// Returns array with all the instances where the characters appear.
quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
result = quoteSample.match(vowelRegex);

// Checks for characters through lazy matching, matching the first it finds.
// Returns ["&lt;h1&gt;"] (which is <h1>).
let text = "<h1>Winter is coming</h1>";
myRegex = /<.*?>/;
result = text.match(myRegex);

// Checks for characters that occure more than one time.
// Returns ["ss", "ss"].
let difficultSpelling = "Mississippi";
myRegex = /s+/gi;
result = difficultSpelling.match(myRegex);

// Checks for any of the letters or numbers that are in the brackets.
// Returns ["l", "r", "r", "3", "4", "5", "2", "6", "5", "3", "s", "r", "l", "i", "i", "o", "s"].
quoteSample = "Blueberry 3.141592653s are delicious.";
myRegex = /[h-s2-6]/gi;
result = quoteSample.match(myRegex);



// Reusing expressions without having to rewrite them.
// This is like writing let reRegex = /^(\d+) \d+ \d+$/;
// Returns true.
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
result = reRegex.test(repeatNum);


// Removes whitespaces from start and end.
let hello = "   Hello, World!  ";
let wsRegex = /^(\s*)|(\s*)$/g;
result = hello.replace(wsRegex, "");

// Uses capture groups to rearrange the numbers.
// Returns "three two one".
let str = "one two three";
let fixRegex = /(one)\s(two)\s(three)/;
let replaceText = "$3 $2 $1";
result = str.replace(fixRegex, replaceText);