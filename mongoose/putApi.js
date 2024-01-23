const express = require("express");

require("./mongooseDBConnect");
const dataModelSchema = require("./modelSchema");

const app = express();
app.use(express.json());

app.put("/update/:_id", async (request, response) => {
  let data = await dataModelSchema.updateOne(
    { _id: request.params },
    { $set: { name: "world hello" } }
  );
  response.send("update=> ");

  // const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
  // console.log("Updated documents =>", updateResult);
});

app.listen(4500);
