fs = require('fs')
let data = fs.readFileSync('./input', 'utf8');

let input = data.split("\n\n")
let validcount = 0;
for (let i = 0; i < input.length; i++) {
  let passport = input[i].replace(/\n/g, ' ');
  if (isValid(passport)) {
    validcount++
  }
}

console.log("Valid passports", validcount)

function isValid(passport) {
  //check fields
  if (passport.includes("byr:") &&
    passport.includes("iyr:") &&
    passport.includes("eyr:") &&
    passport.includes("hgt:") &&
    passport.includes("hcl:") &&
    passport.includes("ecl:") &&
    passport.includes("pid:")) {

    //check contents
    passport = passport.replace(/ /g, '","');
    passport = passport.replace(/:/g, '":"');
    passport = JSON.parse('{"' + passport + '"}');
    if (passport["byr"].match(/^(19[2-9][0-9]|200[0-2])$/) &&
      passport["iyr"].match(/^(201[0-9]|2020)$/) &&
      passport["eyr"].match(/^(202[0-9]|2030)$/) &&
      passport["hgt"].match(/^(1(([5-8][0-9])|(9[0-3]))cm)|((59|6[0-9]|7[0-6])in)$/) &&
      passport["hcl"].match(/^#(([0-9a-f]){6})$/) &&
      passport["ecl"].match(/^(amb|blu|brn|gry|grn|hzl|oth)$/) &&
      passport["pid"].match(/^([0-9]{9})$/)) {
      return true
    }
    return false;
  } else {
    return false;
  }
}