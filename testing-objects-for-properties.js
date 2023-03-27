// Example 1

const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");

// --> The first hasOwnProperty returns true, while the second returns false.

...............................

// Example 2

// --> If the property is found, return that property's value. If not, return "Not Found".

function checkObj(obj, checkProp) {
  
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  };
 
 } 
