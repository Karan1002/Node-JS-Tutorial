const express = require("express");
const reqFilter = require("./routeMiddlewareFile");
const app = express();
const route = express.Router();

route.use(reqFilter);

app.get("/", (req, resp) => {
  resp.send("welcome home");
});

app.get("/users", (req, resp) => {
  resp.send("welcome user");
});

route.get("/about", (req, resp) => {
  resp.send("welcome about page");
});

route.get("/contact", (req, resp) => {
  resp.send("welcome contact page");
});

app.use("/", route);
app.listen(4500);
