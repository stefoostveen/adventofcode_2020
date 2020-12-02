fs = require('fs')
fs.readFile('./p2.input', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  //console.log(data);
  let input = data.split("\n")

  let p1_valid_count = 0;
  let p1_invalid_count = 0;
  let p1_total = 0;

  let p2_valid_count = 0;
  let p2_invalid_count = 0;
  let p2_total = 0;

  // walk the lines
  for (var i = 0; i < input.length; i++) {
    let pwd_line = input[i].split(": ")
    let rule = pwd_line[0]
    let min_char = parseInt(rule.split("-")[0])
    let max_char = parseInt(rule.split("-")[1].split(" ")[0])
    let letter = rule.split("-")[1].split(" ")[1]
    let pwd = pwd_line[1]

    // part 1
    if (pwd.split(letter).length - 1 >= min_char && pwd.split(letter).length - 1 <= max_char) {
      console.log("pwd_valid", pwd);
      p1_valid_count++;
    } else {
      console.log("pwd_invalid", pwd);
      p1_invalid_count++;
    }
    p1_total++;

    // part 2
    if ((pwd[min_char - 1] == letter) != (pwd[max_char - 1] == letter)) {
      console.log("pwd_valid", pwd);
      p2_valid_count++;
    } else {
      console.log("pwd_invalid", pwd);
      p2_invalid_count++;
    }
    p2_total++;
  }

  // show results
  console.log("Part 1 - total valid " + p1_valid_count + ", invalid: " + p1_invalid_count + ", total: " + p1_total)
  console.log("Part 2 - total valid " + p2_valid_count + ", invalid: " + p2_invalid_count + ", total: " + p2_total)


});