function sumAll(arr) {
  let sum = 0;
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  for(let i = max; i >= min; i--) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([4, 1]));