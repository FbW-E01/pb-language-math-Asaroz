// Math
// Perform Mathematical Tasks with JavaScript. Remember: you must use the Math functions and print all results to the console!

// 1. Minimum and maximum
// a. Lowest Number
// Print out the lowest number between -1 and 4.

console.log(Math.min(-1,4))


// b. Highest Number
// Print out the highest number between -1 and 4.

console.log(Math.max(-1,4))

// 2. Rounding
// a. Round up
// Round up each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 43.342.

console.log(Math.ceil(3321.32321))
console.log(Math.ceil(326.76))
console.log(Math.ceil(76788.7))
console.log(Math.ceil(-9.78))
console.log(Math.ceil(43.342))


// b. Round down
// Round down each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 28.329.

console.log(Math.floor(3321.32321))
console.log(Math.floor(326.76))
console.log(Math.floor(76788.7))
console.log(Math.floor(-9.78))
console.log(Math.floor(43.342))


// 3. Dice Roll!
// Print a random integer between 1 and 6.

console.log(Math.ceil(Math.random()*6))
console.log(Math.round(Math.random()*6))