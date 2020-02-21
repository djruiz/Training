const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
const server = require("../server");

chai.use(chaiHttp);

describe("GET / ", () => {
  it("returns the string Home", async () => {
    const res = await chai.request(server).get("/");
    expect(res.text).to.eq("Home");
  });
});