const express = require("express");
const getConnection = require("./mongoDBConnect");
const mongoDB = require("mongodb");

const app = express();

app.use(express.json());

app.delete("/:id", async (request, response) => {
  let data = await getConnection();
  let result = await data.deleteMany({
    _id: new mongoDB.ObjectId(request.params.id),
  });
  //   console.log(request.params.id);
  response.send(result);
});
app.listen(4500);

// const deleteResult = await collection.deleteMany({ a: 3 });
// console.log("Deleted documents =>", deleteResult);
