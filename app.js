for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("\n");
const arr = [1, 2, 3, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

const script = require("./script");

console.log("\n" + script.x);
console.log("\n" + script.y);
console.log(script.z());

const arr1 = [1, 2, 3, 7, 3, 3, 3, 3, 3, 3, 8, 9];
let result = arr1.filter((item) => {
  console.log(item);
  return item < 3;
});

console.log(result);

var colors = require("colors");

console.log("hello".green); // outputs green text
console.log("i like cake and pies".underline.red); // outputs red underlined text
console.log("inverse the color".inverse); // inverses the color
console.log("OMG Rainbows!".rainbow); // rainbow
console.log("Run the trap".trap); // Drops the bass

// import chalk from "chalk";
let chalk = require("chalk");
const log = console.log;

// Combine styled and normal strings
log(chalk.blue("Hello") + " World" + chalk.red("!"));
