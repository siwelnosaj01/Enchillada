const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  diedre: 81,
  vonnie: 60,
};

// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`);
// }
// // ===================================
// USING FOR...IN TO ITERATE AN OBJECT
// ===================================

// for (let person in testScores) {
//   console.log(`${person} scored ${testScores[person]}`);
// }

// ==============================================
// Using Object methods to iterate
// (turn data into an array and then use for...of)
// ==============================================
// // Object.keys(testScores);
// Object.values(testScores);

for (let score of Object.values(testScores)) {
  console.log(score);
}
