const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").split("\n");

/*=============================================
=                   Part 1                    =
=============================================*/

const listA = [];
const listB = [];
let sum = 0;
input.forEach((row) => {
  const [elem1, elem2] = row.split("   ");
  listA.push(Number(elem1));
  listB.push(Number(elem2));
});
listA.sort();
listB.sort();
listA.forEach((_, index) => {
  sum += Math.abs(listA[index] - listB[index]);
});

console.log("Part 1 result:", sum);

/*=============================================
=                   Part 2                    =
=============================================*/

const countInSecondList = (value) => {
  let count = 0;
  listB.forEach((valueB) => {
    if (value === valueB) count++;
  });
  return count;
};

let score = 0;
listA.forEach((valueA) => {
  let occurances = 0;
  occurances += countInSecondList(valueA);
  score += occurances * valueA;
});
console.log("Part 2 result:", score);
