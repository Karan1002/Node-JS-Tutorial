const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const secretKey = "secretKey";

app.get("/", (request, response) => {
  response.json({ message: "a sample api" });
});

app.post("/login", (request, response) => {
  const user = {
    id: 1,
    username: "karan@1002",
    email: "karankushwaha7227@gmail.com",
  };
  jwt.sign({ user }, secretKey, { expiresIn: "300s" }, (error, token) => {
    response.json({
      token,
    });
  });
});

app.post("/profile", verifyToken, (request, response) => {
  jwt.verify(request.token, secretKey, (error, authData) => {
    if (error) {
      response.send({ result: "invaild token" });
    } else {
      response.json({
        message: "profile accessed.",
        authData,
      });
    }
  });
});

function verifyToken(request, response, next) {
  const bearerHeader = request.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    request.token = token;
    next();
  } else {
    response.send({ result: "Token is not Valid" });
  }
}

// const verifyToken = (request, response, next) => {
//   const bearerHeader = request.header["Authorization"];
//   if (typeof bearerHeader !== "undefined") {
//   } else {
//     response.send({ result: "Token is not Valid" });
//   }
// };

app.listen(4500, () => {
  console.log("app is running is 4500");
});
