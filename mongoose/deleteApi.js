const express = require("express");

require("./mongooseDBConnect");
const dataModelSchema = require("./modelSchema");

const app = express();
app.use(express.json());

app.delete("/delete/:_id", async (request, response) => {
  console.log(request.params);
  let data = await dataModelSchema.deleteOne(request.params);
  response.send(data);
});

app.listen(4500);
