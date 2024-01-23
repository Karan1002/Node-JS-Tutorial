const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/karan-kushwaha");
  const dataSchema = new mongoose.Schema();
};

main();
