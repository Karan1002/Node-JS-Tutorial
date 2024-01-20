const expess = require("express");
const app = expess();
const path = require("path");
const publicPath = path.join(__dirname, "public");

console.log(publicPath);
// app.use(expess.static(publicPath));
app.get("", (req, resp) => {
  resp.sendFile(`${publicPath}/index.html`);
});

app.get("/about", (req, resp) => {
  resp.sendFile(`${publicPath}/about.html`);
});

app.get("*", (req, resp) => {
  resp.sendFile(`${publicPath}/404.html`);
});

app.listen(5000);
