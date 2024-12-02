const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").split("\n");

/*=============================================
=                   Part 1                    =
=============================================*/

const reports = [];
let safe = 0;
input.forEach((row) => reports.push(row));

/** @param {number[]} report */
function isMonotonic(arr) {
  const result = arr.reduce(
    (acc, curr, index) => {
      if (index === 0 || !acc.isValid) return acc; // Salta il primo elemento o interrompi se già non valido

      const diff = curr - arr[index - 1];
      if (diff === 0 || Math.abs(diff) > 3) {
        acc.isValid = false; // Interrompi se i numeri sono uguali o differenza > 3
      } else if (diff > 0) {
        if (acc.direction === "decreasing") acc.isValid = false; // Contraddice la direzione
        acc.direction = "increasing";
      } else if (diff < 0) {
        if (acc.direction === "increasing") acc.isValid = false; // Contraddice la direzione
        acc.direction = "decreasing";
      }

      return acc;
    },
    { isValid: true, direction: null }
  );

  return result.isValid;
}

reports.forEach((report) => {
  if (isMonotonic(report.split(" ").map(Number))) {
    safe++;
  }
});

console.log("Part 1 result:", safe);

/*=============================================
=                   Part 2                    =
=============================================*/
