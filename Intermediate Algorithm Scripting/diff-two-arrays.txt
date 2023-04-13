function diffArray(arr1, arr2) {
  let newArr = arr1.filter(x => !arr2.includes(x));
  let newArr2 = arr2.filter(y => !arr1.includes(y));
  newArr = newArr.concat(newArr2);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));