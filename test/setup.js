const mongoose = require("mongoose");
const env = require("dotenv");

before(async () => {
  env.config();
  mongoose
    .connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
});