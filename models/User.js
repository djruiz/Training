const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: String,
  hashedPassword: String,
  email: String
});

module.exports = mongoose.model("users", schema);
