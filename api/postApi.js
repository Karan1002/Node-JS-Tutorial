const express = require("express");
const getConnection = require("./mongoDBConnect");

const app = express();

app.use(express.json());

app.post("/", async (request, response) => {
  //   console.log(request.body);
  let data = await getConnection();
  let result = await data.insertOne(request.body);
  response.send(result);
});
app.listen(4500);
