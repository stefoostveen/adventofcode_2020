fs = require('fs')
let data = fs.readFileSync('./input', 'utf8');

function findObstacles(h, v) {
  //console.log(data);
  let input = data.split("\n")
  let trees = 0;
  let free_space = 0;
  let countstepsdown = 0;
  let countstepsright = 0;

  while (countstepsdown < input.length) {
    if (input[countstepsdown][countstepsright] == "#") {
      trees++;
    } else {
      free_space++;
    }

    // wrap 
    if (input[countstepsdown].length <= countstepsright + h) {
      let remaining_in_row = input[countstepsdown].length - 1 - countstepsright;
      countstepsright = h - remaining_in_row - 1
    } else {
      countstepsright += h;
    }

    countstepsdown += v;

  }
  console.log("Trees encountered", trees)
  console.log("Free space encountered", free_space)
  console.log("Total spots", trees + free_space)
  return trees
}

let treemult = 1;
treemult *= findObstacles(1, 1)
treemult *= findObstacles(3, 1)
treemult *= findObstacles(5, 1)
treemult *= findObstacles(7, 1)
treemult *= findObstacles(1, 2)
console.log("Treemult", treemult)