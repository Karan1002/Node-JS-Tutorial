const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "crud");
console.log(dirPath);

fs.writeFileSync(`${dirPath}/create.txt`, "create file from karan");
console.log("file create");

fs.readFile(`${dirPath}/create.txt`, "utf8", (error, item) => {
  console.log(item);
});

fs.appendFile(`${dirPath}/create.txt`, " kushwaha", (error) => {
  if (!error) {
    console.log("file update");
  }
});

// fs.rename(`${dirPath}/create.txt`, `${dirPath}/rename.txt`, (error) => {
//   if (!error) {
//     console.log("file name update");
//   }
// });

fs.unlinkSync(`${dirPath}/rename.txt`);
console.log("file delete");
