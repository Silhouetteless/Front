function myReplace(str, before, after) {
   
  if(before.charAt(0) ==  before.charAt(0).toLowerCase()) { //if the word starts with lowercase 
      return str.replace(before, after.charAt(0).toLowerCase() + after.substring(1));
  } else { //the word starts with uppercase
      return str.replace(before, after.charAt(0).toUpperCase() + after.substring(1));
  }
 

}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
