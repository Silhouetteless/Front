function pairElement(str) {
  let arr = str.split("");
  let dNA = [];

for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
              case 'A': dNA.push(['A','T']);
                        break;
              case 'T': dNA.push(['T','A']);
                        break;
              case 'C': dNA.push(['C','G']);
                        break;
              case 'G': dNA.push(['G','C']);
                        break;
    }
}

return dNA;

}

console.log(pairElement("GCG"));
console.log(pairElement("TTGAG"));
