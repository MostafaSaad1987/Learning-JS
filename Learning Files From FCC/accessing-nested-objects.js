// This script is about accessing properties from nested objects.
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

// First accessing myStorage, then accessing car, then inside, all using dot notation, then accessing glove box through brackets notation due to it being a string
// made of multiple words.
const gloveBoxContents = myStorage.car.inside["glove box"];