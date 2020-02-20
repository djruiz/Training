const mongoose = require("mongoose");
const server = require("../server");
const env = require("dotenv");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

before(async () => {
  env.config();
  mongoose
    .connect(process.env.DB_CONNECTION)
    .then(() => console.log("DB connected"))
    .catch(err => console.log(err));
  require("../server");
});

module.exports = {
  agent: chai.request(`http://${process.env.HOST}:${process.env.PORT}`)
};
