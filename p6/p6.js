fs = require('fs')
let data = fs.readFileSync('./input', 'utf8');

let input = data.split("\n\n")
let p1 = 0;
let p2 = 0;

// group
for (let j = 0; j < input.length; j++) {
  let group = input[j]
  let personcount = group.split("\n").length;
  group = group.replace(/\n/g, '');

  //p1
  let uniqueChars = Array.from(group).filter(function (elem, i, self) {
    return self.indexOf(elem) == i;
  })
  p1 += uniqueChars.length;

  //p2
  let counts = {};
  let ch, count;
  for (i = 0; i < group.length; i++) {
    ch = group[i];
    count = counts[ch];
    counts[ch] = count ? count + 1 : 1;
    if (counts[ch] >= personcount) {
      p2++;
    }
  }


}

console.log("p1", p1)
console.log("p2", p2)

