function getIndexToIns(arr, num) {

  /*
      +METHOD 1+
        numArray.sort();
        
            var numArray = [140000, 104, 99];
            numArray = numArray.sort();
            console.log(numArray);

      By default, the sort method sorts elements alphabetically. 
      So it will give:
      
            [104, 140000, 99]

      To sort numerically just add a new method which handles 
      numeric sorts (sortNumber, shown below) -

            a)
            
            var numArray = [140000, 104, 99];
            numArray.sort(function(a, b) {
              return a - b;
            });

            b)

            numArray = numArray.sort((a, b) => a - b);

      +METHOD 2+
      Passing a comparator function to sort() makes sorting slow, 
      so to sort numbers you can create any TypedArray instead:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

            var numArray = new Float64Array([140000, 104, 99]);
            numArray = numArray.sort();
            console.log(numArray);

  */

  //sorting an array

  var sortedArray = arr.sort((a,b) => a - b);
  
  //checking for the first number that is bigger than num
  for(let i = 0; i < sortedArray.length; i++) {
    if(sortedArray[i] >= num){
      //returning the index
      return i;
    }
  }
  
  
  return sortedArray.length;
 
}


getIndexToIns([40, 60], 50);
