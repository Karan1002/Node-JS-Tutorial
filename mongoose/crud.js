const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/karan-kushwaha");
const dataSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
});

const saveInDB = async () => {
  const dataModel = mongoose.model("node-js-tutorials", dataSchema);

  let data = new dataModel({
    name: "hello",
    email: "world@gmail.com",
    mobile: 9974378144,
  });
  let result = await data.save();
  console.log(result);
};

// saveInDB();

const upadteInDB = async () => {
  const dataModel = mongoose.model("node-js-tutorials", dataSchema);
  let data = await dataModel.updateMany(
    { name: "hello" },
    { $set: { name: "world", email: "world@gmail.com" } }
  );

  if (data.acknowledged) {
    console.log("success=> ", data);
  } else {
    console.log("failed");
  }
};

// upadteInDB();
// const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
// console.log("Updated documents =>", updateResult);

const deleteInDB = async () => {
  const dataModel = mongoose.model("node-js-tutorials", dataSchema);
  //   let data = await dataModel.deleteOne({ name: "world" });
  let data = await dataModel.deleteMany({ name: "world" });

  if (data.acknowledged) {
    console.log("succes=> ", data);
  } else {
    console.log("failed");
  }
};

// deleteInDB();
// const deleteResult = await collection.deleteMany({ a: 3 });
// console.log("Deleted documents =>", deleteResult);

const searchInDB = async () => {
  const dataModel = mongoose.model("node-js-tutorials", dataSchema);
//   let data = await dataModel.find();
    let data = await dataModel.find({ name: "hello" });
  console.log(data);
};
searchInDB();
