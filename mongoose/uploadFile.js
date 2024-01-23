const express = require("express");
const app = express();

const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (request, file, cb) {
      cb(null, "./mongoose/upload");
    },
    filename: function (request, file, cb) {
      cb(null, file.fieldname + "_" + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

app.post("/", upload, (request, response) => {
  response.send("file upload");
});

app.listen(4500);
