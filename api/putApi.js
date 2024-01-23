const express = require("express");
const getConnection = require("./mongoDBConnect");

const app = express();

app.use(express.json());

app.put("/", async (request, response) => {
  console.log(request.body);
  let data = await getConnection();
  let result = await data.updateOne({ name: "amit" }, { $set: request.body });
});
app.listen(4500);

// const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
// console.log("Updated documents =>", updateResult);
