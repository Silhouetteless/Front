function translatePigLatin(str) {

  if(str[0].match(/^[aeiou]+$/)){
    return str + 'way';
  } else {
       let arr = str.replace(/([^aeiouy]+)([aeiouy])/g, "$1,$2").split(",");
    return arr.slice(1).join('') + arr[0] + 'ay';
  }
 
}

translatePigLatin("california");
translatePigLatin("glove");
translatePigLatin("eight");
