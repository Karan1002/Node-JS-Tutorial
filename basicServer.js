const http = require("http");

const dataControl = (req, resp) => {
  resp.write("<h1>Kushwaha</h1> karan");
  resp.end();
};

http.createServer(dataControl).listen(4500);

// http
//   .createServer((req, resp) => {
//     resp.write("<h1>Vashishth </h1> karan");
//     resp.end();
//   })
//   .listen(4501);
