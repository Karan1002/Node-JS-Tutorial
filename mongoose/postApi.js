const express = require("express");

require("./mongooseDBConnect");
const dataModelSchema = require("./modelSchema");

const app = express();
app.use(express.json());

app.post("/create", async (request, response) => {
  let data = new dataModelSchema(request.body);
  let result = await data.save();
  response.send(result);
});

app.listen(4500);
