const fs = require("fs");

// fs.writeFileSync("kushwaha.txt", "this is karan family");

const path = require("path");
const dirPath = path.join(__dirname, "files");
console.log(dirPath);

for (let i = 0; i < 5; i++) {
  fs.writeFileSync(`${dirPath}/kushwaha${i}.txt`, "this is karan family");
}

fs.readdir(dirPath, (error, files) => {
  console.log(files);
  files.forEach((items) => {
    console.log(items);
  });
});
