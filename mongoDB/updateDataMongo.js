const getConnection = require("./mongoDBConnect");

const upadteData = async () => {
  const db = await getConnection();
  console.log("upadte");
  //   const data = await db.updateOne({ name: "xyz" }, { $set: { name: "pavan" } });             Single

  //        multiple
  const data = await db.updateMany(
    { name: "xyz" },
    { $set: { name: "pavan" } }
  );

  if (data.acknowledged) {
    console.log("success=> ", data);
  } else {
    console.log("failed");
  }
};

upadteData();

// const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
// console.log("Updated documents =>", updateResult);
