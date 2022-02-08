function whatIsInAName(collection, source) {
  // Only change code below this line
var srcName = Object.keys(source);


return collection.filter(function(elem) {
  return srcName.every(function(key) {
      console.log("elem[srcName]: " + elem[key] + " === srcVal: " + source[key]);
      if(elem[key] === source[key] && elem.hasOwnProperty(key)) {
        return true;
      }
  });
});

  // Only change code above this line
 
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

console.log("the results: " + whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
