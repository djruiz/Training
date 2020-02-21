require("./setup");

const { expect } = require("chai");
const faker = require("faker");
const User = require("../models/User");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");

chai.use(chaiHttp);

describe("POST /users", () => {
  it("validates the request body", async () => {
    let res;
    try {
      res = await chai.request(server).post('/users').send({
        user: {}
      });
    } catch (err) {
      console.log(err);
    }
    expect(res.status).to.eq(422);
    expect(res.body.errors.name.rule).to.eq("required");
    expect(res.body.errors.email.rule).to.eq("required");
    expect(res.body.errors.password.rule).to.eq("required");

    const res2 = await chai.request(server).post('/users').send({
      user: {
        name: faker.random.alphaNumeric(31),
        email: faker.random.alphaNumeric(10),
        password: faker.random.alphaNumeric(5)
      }
    });
    expect(res2.status).to.eq(422);
    expect(res2.body.errors.name.rule).to.eq("maxLength");
    expect(res2.body.errors.email.rule).to.eq("email");
    expect(res2.body.errors.password.rule).to.eq("minLength");
  });
  it("saves a user to the database", async () => {
    let user = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    };
    await chai.request(server).post('/users').send({ user });
    expect(await User.find({ email: user.email })).is.not.undefined;
  });
});