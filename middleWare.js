const express = require("express");
const app = express();

const reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("please provide age");
  } else if (req.query.age > 18) {
    resp.send("you access");
  } else {
    next();
  }
};

app.use(reqFilter);
app.get("/", (req, resp) => {
  resp.send("welcome home");
});

app.get("/users", (req, resp) => {
  resp.send("welcome user");
});

app.get("/about", (req, resp) => {
  resp.send("welcome about page");
});
app.listen(4500);
