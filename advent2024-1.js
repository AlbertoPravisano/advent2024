const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").split("\n");

/*=============================================
=                   Part 1                    =
=============================================*/

const listA = [];
const listB = [];
let sum = 0;
input.forEach((row, index) => {
  const [elem1, elem2] = row.split("   ");
  listA.push(Number(elem1));
  listB.push(Number(elem2));
});
listA.sort();
listB.sort();
listA.forEach((_, index) => {
  sum += Math.abs(listA[index] - listB[index]);
});

console.log(sum);

/*=============================================
=                   Part 1                    =
=============================================*/
