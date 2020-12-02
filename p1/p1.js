fs = require('fs')
fs.readFile('./p1.input', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  //console.log(data);
  let input = data.split("\n")
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
      if (parseInt(input[j]) + parseInt(input[i]) == 2020) {
        console.log("got", "v1:" + input[j] + "; v2:" + input[i])
        console.log("result", (parseInt(input[j]) * parseInt(input[i])))
      }
    }
  }


  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
      for (var k = 0; k < input.length; k++) {
        if (parseInt(input[j]) + parseInt(input[i]) + parseInt(input[k]) == 2020) {
          console.log("got", "v1:" + input[j] + "; v2:" + input[i] + "; v3:" + input[k])
          console.log("result", (parseInt(input[j]) * parseInt(input[i]) * parseInt(input[k])))
        }
      }
    }
  }

});