const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
});

module.exports = mongoose.model("node-js-tutorials", dataSchema);
