function spinalCase(str) {
  return str
  //replaces lowCaseUpperCase with lowCase UpperCase
    .replace(/([a-z])([A-Z])/g, "$1 $2")
  //changes all to lower cases
    .toLowerCase()
  //splits space or underscore or not word char
    .split(/\s+|_+|\W/)
  //joins with dashes
    .join("-");
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("This&is@Spinal$Tap!Yay"));

