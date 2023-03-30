// This script is about hasOwnProperty, which returns a bool that indicates if the object has the property or not.
// This function checks if checkProp property exists in obj object. If it does, it returns the property value, otherwise it returns Not Found.
function checkObj(obj, checkProp) {
    if(obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    }
    return "Not Found";
  }