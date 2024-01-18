module.exports = {
  x: 10,
  y: 20,
  z: () => {
    return "karan";
  },
};

const fs = require("fs");
fs.writeFileSync("karan.txt", "hello karan kushwaha");
