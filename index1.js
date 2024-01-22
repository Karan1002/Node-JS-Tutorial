const expess = require("express");
const app = expess();
const path = require("path");
// const viewsPath = path.join(__dirname, "views");

app.set("view engine", "ejs");

app.get("/profile", (req, resp) => {
  const user = {
    name: "karan",
    email: "karankushwaha7227@gmail.com",
    fruits: ["apple", "bannna", "chikoo", "mango"],
  };
  resp.render("profile", { user });
});

app.get("/login", (req, resp) => {
  resp.render("login");
});

// console.log(viewsPath);

app.listen(4500);
