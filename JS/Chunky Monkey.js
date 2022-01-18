function chunkArrayInGroups(arr, size) {

  var newArray = [];
  
  for(let i = 0; i <= (arr.length - (i * size)); i++) {
    let newElement = arr.slice(i * size, (i * size) + size);
    newArray.push(newElement);
    //or in one line newArray.push(arr.slice(i * size, (i * size) + size));
  }
  
  //changing into one dimention array to check the number of all elements
  var oneDimentionNewArray = newArray.join().split(",");

  //checking if there are any elements left
  if(arr.length > oneDimentionNewArray.length) {
    //checking how many elements are left and adding them to the newArray
    let leftElements = arr.length - oneDimentionNewArray.length;
    newArray.push(arr.splice(-leftElements, leftElements));
  }
  
  

  return newArray;
 
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 4));
