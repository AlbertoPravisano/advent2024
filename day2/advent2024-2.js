const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8").split("\n");

/*=============================================
=                   Part 1                    =
=============================================*/

const reports = [];
let safe = 0;
input.forEach((row) => reports.push(row));

/** @param {number[]} report */
const isMonotonic = (report = []) => {
  if (report.length <= 1) return true; // Array con 0 o 1 elemento sono sempre monotoni

  const result = report.slice(1).reduce((acc, curr, index) => {
    if (!acc) return false; // Se già trovato non monotono, fermati
    const diff = curr - report[index];
    if (diff === 0) return false; // Se due elementi consecutivi sono uguali
    if (acc === "increasing" && diff < 0) return false; // Se crescente ma trova decrescita
    if (acc === "decreasing" && diff > 0) return false; // Se decrescente ma trova crescita
    if (acc === "unknown") acc = diff > 0 ? "increasing" : "decreasing"; // Determina la direzione
    return acc;
  }, "unknown");

  return result !== false;
};

reports.forEach((report) => {
  if (isMonotonic(report.split(" ").map(Number))) {
    safe++;
  }
});

console.log("Part 1 result:", safe); // 592 too high

/*=============================================
=                   Part 2                    =
=============================================*/
