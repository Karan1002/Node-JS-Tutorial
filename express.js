const express = require("express");

const app = express();
app.get("", (request, response) => {
  response.send(`
  <h1>Welcome, Karan Kushwaha this is home page</h1>
  <a href="/about">Go to about page</a>`);
});

app.get("/about", (request, response) => {
  response.send(`<input type="text" value="${request.query.name}"></input> Hello, Karan about page
  <a href="/help">Go to help page</a>`);
});

app.get("/help", (request, response) => {
  response.send([
    {
      name: "akaran",
      email: "karan@gmail.com",
    },
    {
      name: "akaran",
      email: "karan@gmail.com",
    },
    {
      name: "akaran",
      email: "karan@gmail.com",
    },
  ]);
  //   response.send(`<a href="/">Go to home page</a>`);
});

app.listen(4500);
