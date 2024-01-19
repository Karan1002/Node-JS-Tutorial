module.exports = {
  x: 10,
  y: 20,
  z: () => {
    return "karan";
  },
};

const fs = require("fs");
fs.writeFileSync("karan.txt", "hello karan kushwaha");

const fs1 = require("fs").writeFileSync("my.txt", "hello kushwaha");
