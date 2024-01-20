//node .\inputCommand.js add hello.txt 'apple is king'
//node .\inputCommand.js remove hello.txt

console.log(process.argv);
console.log(process.argv[2]);

const fs = require("fs");0

const input = process.argv;

if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  fs.unlinkSync(input[3]);
} else {
  console.log("plzz correct one");
}
