function mutation(arr) {

    /*
      changing everything to lowercase:
            1. Use the Array.map() method to iterate over all elements of an array
            2. Use the string methods to change the case of the elements
    */
      const lowerCasedArray = arr.map(name => name.toLowerCase());
     

    //changing second item into an Array of Characters
    //I wanted to use a for loop for practice, but it can be also done by using .split("")

      let secondItemIntoChar = [];

      for(let i = 0; i < lowerCasedArray[1].length; i++) {
        secondItemIntoChar.push(lowerCasedArray[1][i]);
      }
  
    /*
      The indexOf() method returns the first index at which a specified string can be found in the given String object. If the string is not present, it returns -1.
      Syntax: str.indexOf(searchValue[, fromIndex]);
      */
      for(let j = 0; j < secondItemIntoChar.length; j++) {
        if(lowerCasedArray[0].indexOf(secondItemIntoChar[j]) < 0) {
          return false;
        }
      }

      return true;

}

mutation(["hello", "hey"]);   //should return false
mutation(["hello", "hery"]);  //should return false
mutation(["Hello", "helly"]);  //should return true
