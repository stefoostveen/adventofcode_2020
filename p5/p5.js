fs = require('fs')
let data = fs.readFileSync('./input', 'utf8');

let input = data.split("\n")
let r_levels = 7
let rows = 2**r_levels

let c_levels = 3
let cols = 2**c_levels
let highestseatid = 0;
let seatids = []

for(let j=0;j<input.length;j++){
  let col = 0;
  let row = 0

  let ticket=input[j]
  for(let i=0;i<=r_levels;i++){
    if(ticket[i]=="B"){
      row = row + (rows/(2**(i+1)))
    }
  }

  for(let i=0;i<=cols;i++){
    if(ticket[i+r_levels]=="R"){
      col = col + (cols/(2**(i+1)))
    }
  }

  let seatid = row * 8 + col;
  seatids.push(seatid);
  if(seatid>highestseatid){
    highestseatid = seatid;
  }
  console.log("ticket:","row",row, "col", col, "seatid", seatid);
}

console.log("highest seatid",highestseatid);
console.log("missing seats",findMissing(seatids, highestseatid));

function findMissing(seatids, highestseatid){
  let missingSeats = []
  for(x=0;x<=highestseatid;x++){
    if(!seatids.includes(x) && seatids.includes(x-1) && seatids.includes(x+1)){
      missingSeats.push(x);
    }
  }
  return missingSeats;
}