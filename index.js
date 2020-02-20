const mongoose = require("mongoose");
const env = require("dotenv");
env.config();
const server = require("server");

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

server.listen(process.env.PORT);
