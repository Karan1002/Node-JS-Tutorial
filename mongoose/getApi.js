const express = require("express");

require("./mongooseDBConnect");
const dataModelSchema = require("./modelSchema");

const app = express();
app.use(express.json());

app.get("/list", async (request, response) => {
  let data = await dataModelSchema.find();
  response.send(data);
  console.log(data);
});

app.listen(4500);
