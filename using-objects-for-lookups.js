// Setup
function phoneticLookup(val) {
  let result = "";

// Creating the object
  
 var lookup = {
    "alpha":"Adams",
      
    "bravo": "Boston",
      
    "charlie": "Chicago",
    
    "delta": "Denver",
 
    "echo":"Easy", 
      
    "foxtrot":"Frank"
  };

// Assigning the associated string to a variable "result"
  
result = lookup[val]
  return result;
}

phoneticLookup("charlie");
console.log(phoneticLookup("charlie")) // output = Chicago
