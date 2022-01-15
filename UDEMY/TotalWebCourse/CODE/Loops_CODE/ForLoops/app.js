// ======================================
// WITHOUT ANY LOOPS...LOTS OF REPETITION
// ======================================
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// ======================================
// OUR FIRST FOR LOOP
// ======================================

// for (let num = 1; num <= 10; num += 1) {
//     console.log(num);
// }

// ======================================
// MORE EXAMPLES OF FOR LOOPS!
// ======================================

// for (let i = 1; i <= 20; i += 2) {
//     console.log(i)
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

// for (let i = 10; i <= 1000; i *= 10) {
//     console.log(i);
// }

// DO NOT RUN THIS LOOP
// INFINITE LOOP!! BAD!!
// ================================
// ================================
// for (let i = 20; i >= 0; i++) {
//     console.log(i)
// }
// ================================
// ================================

// var num1, num2;
// num1 = window.prompt('Input the First integer', '0');
// num2 = window.prompt('Input the second integer', '0');

// if (parseInt(num1, 10) > parseInt(num2, 10)) {
//   console.log('The larger of ' + num1 + ' and ' + num2 + ' is ' + num1 + '.');
// } else if (parseInt(num2, 10) > parseInt(num1, 10)) {
//   console.log('The larger of ' + num1 + ' and ' + num2 + ' is ' + num2 + '.');
// } else {
//   console.log('The values ' + num1 + ' and ' + num2 + ' are equal.');
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (var i = 0; i < numbers.length; i++) {
  console.log(i);
}
