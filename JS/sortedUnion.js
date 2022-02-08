function uniteUnique(arr) {
    
  //getting all arguments:
  let args = [...arguments];

  //joining all arrays
  let allNums = [].concat(...args);

  //deleting duplicated
  let newArr = [...new Set(allNums)];
  return newArr;

}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
