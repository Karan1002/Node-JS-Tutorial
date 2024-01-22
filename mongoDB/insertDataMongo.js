const getConnection = require("./mongoDBConnect");

const insertData = async () => {
  const db = await getConnection();
  //   console.log("insert data");
  const result = await db.insertMany([
    { name: "xyz1", email: "xyz@gmail.com" },
    { name: "abc1", email: "abc@gmail.com" },
    { name: "pqr1", email: "pqr@gmail.com" },
  ]);

  if (result.acknowledged) {
    console.log("success");
  } else {
    console.log("failed");
  }

  console.log(result);
};

insertData();
