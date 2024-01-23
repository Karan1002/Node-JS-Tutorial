const express = require("express");
const EventEmitter = require("events");

const app = express();

const event = new EventEmitter();
let count = 0;
event.on("countAPI", () => {
  count++;
  console.log("event called=> ", count);
});

app.get("/", (request, response) => {
  response.send("api called");
  event.emit("countAPI");
});

app.get("/search", (request, response) => {
  response.send("api search called");
});

app.get("/update", (request, response) => {
  response.send("api update called");
});

app.listen(4500);
