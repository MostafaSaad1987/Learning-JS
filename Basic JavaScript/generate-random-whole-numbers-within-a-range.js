// This script randomly generates a number with both the min and max being included.
// Stackoverflow link is important to understand.
function randomRange(myMin, myMax) {
  return (Math.floor(Math.random() * (myMax - myMin + 1) + myMin));
  // https://stackoverflow.com/questions/62981108/how-does-math-floormath-random-max-min-1-min-work-in-javascript
}