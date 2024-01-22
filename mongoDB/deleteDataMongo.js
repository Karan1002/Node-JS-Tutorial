const getConnection = require("./mongoDBConnect");

const deleteData = async () => {
  const db = await getConnection();
  console.log("delete");

  //   let deleteResult = await db.deleteOne({ name: "pqr" });
  let deleteResult = await db.deleteMany({ name: "abc1" });

  if (deleteResult.acknowledged) {
    console.log("success=> ", deleteResult);
    if (deleteResult.deletedCount > 0) {
      console.log("data delete");
    } else {
      console.log("data not delete");
    }
  } else {
    console.log("failed");
  }
  console.log(deleteResult.deletedCount);
};

deleteData();

// const deleteResult = await collection.deleteMany({ a: 3 });
// console.log("Deleted documents =>", deleteResult);
