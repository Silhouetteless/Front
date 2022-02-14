function sumFibs(num) {
  let numBefore = 0;
  let currentNum = 1;
  let oddSum = 0;

 while (currentNum <= num) {
     let result = numBefore + currentNum;
     console.log(numBefore + " + " + currentNum + " = " + result);
      if (currentNum % 2) {
      oddSum += currentNum;
      console.log("Adding " + currentNum + "  ---- current oddSum: " + oddSum);
    } 
      numBefore = currentNum; console.log("---- numBefore: " + numBefore);
      currentNum = result; console.log("---- currentNum: " + currentNum);
    console.log("-----------.........---------");
  }

  return oddSum;
    
}

sumFibs(10);

