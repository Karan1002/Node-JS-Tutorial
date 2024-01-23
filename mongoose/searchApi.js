const express = require("express");

require("./mongooseDBConnect");
const dataModelSchema = require("./modelSchema");

const app = express();
app.use(express.json());

app.get("/search/:key", async (request, response) => {
  console.log(request.params.key);
  let data = await dataModelSchema.find({
    $or: [
      { name: { $regex: request.params.key } },
      //   { email: { $regex: request.params.key } },             multiple filed search
    ],
  });
  response.send(data);
});
app.listen(4500);
