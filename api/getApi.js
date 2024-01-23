const express = require("express");
const getConnection = require("./mongoDBConnect");

const app = express();

app.get("/", async (request, response) => {
  let data = await getConnection();
  data = await data.find().toArray();
  //   console.log(data);
  response.send(data);
});

app.listen(4500);
