//https://www.w3schools.com/html/html_entities.asp

function convertHTML(str) {

console.log(str.charAt(0));

//getting a char array 
var charArr = Array.from(str);
console.log("The char array: " + charArr);

//changing the char to corresponding HTML entities
for(let i = 0; i < charArr.length; i++) {
    switch(charArr[i]) {
      case "&":
                  charArr[i] = "&amp;";
                  break;
      case "<":
                  charArr[i] = "&lt;";
                  break;
      case ">":
                  charArr[i] = "&gt;";
                  break;
      case "\"":
                  charArr[i] = "&quot;";
                  break;
      case "'":
                 charArr[i] = "&apos;";
                  break;
    }
}

//joining the array
return charArr.join("");


}

console.log(convertHTML("Dolce & Gabbana"));
