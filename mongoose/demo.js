const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/karan-kushwaha");
  const dataSchema = new mongoose.Schema({ name: String, email: String });

  const dataModel = mongoose.model("node-js-tutorials", dataSchema);

  let data = new dataModel({ name: "hello", email: "world@gmail.com" });
  let result = await data.save();
  console.log(result);
};

main();
