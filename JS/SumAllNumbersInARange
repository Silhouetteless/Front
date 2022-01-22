function sumAll(arr) {

//sorting the array in ascending order in case the lowest number didn't come first
  arr.sort(function(a,b) {
    return a - b;
  })


//creating a newArray with the numbers between the given numbers
  let newArray = [];

  for(let i = arr.at(0); i < (arr.at(-1) - 1); i++) {
      newArray.push(i+1)
  }

//joining both array and adding all numbers together
  const sumOfAllNum = arr.concat(newArray).reduce((sum,num) => sum + num, 0);

  return sumOfAllNum;



}

console.log(sumAll([4, 1]));
