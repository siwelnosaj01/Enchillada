const subreddits = [
  'cringe',
  'books',
  'chickens',
  'funny',
  'pics',
  'soccer',
  'gunners',
];

for (let i = 0; i < subreddits.length; i++) {
  console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

for (let subreddit of subreddits) {
  console.log(`Visit reddit.com/r/${subreddit}`);
}

// const seatingChart = [
//   ['Kristen', 'Erik', 'Namita'],
//   ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//   ['Yuma', 'Sakura', 'Jack', 'Erika'],
// ];

// for (let i = 0; i < seatingChart.length; i++) {
//   const row = seatingChart[i];
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

// // for (let row of seatingChart) {
// //     for (let student of row) {
// //         console.log(student);
// //     }
// // }

// // for (let char of "hello world") {
// //     console.log(char)
// // }

// // const numbers = [1,2,3,4,5,6,7,8,9];

// // for (let i = 0; i < numbers.length; i++) {
// //   const row = numbers[i];
// //   for (let j = 0; j < row.length; j++) {
// //     console.log(row[j])
// //   }
// // }

// // numbers

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numbers; i++) {
//   console.log(numbers);
// }
