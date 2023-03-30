// This script is about accessing nested arrays.
// In this script, there is an array, that contains two objects, each with multiple properties.
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Accessing the pine from list in the second object requires the use of both the dot and brackets notation.
// First, access the second element in the myPlants array (the one with trees as type), then access the list property in that object through dot notation, then access the
// second element in it through bracket notation.
const secondTree = myPlants[1].list[1];