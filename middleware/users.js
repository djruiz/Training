const User = require("../models/User");
const bcrypt = require("bcrypt");

async function register(ctx) {
  let attributes = ctx.request.body.user;
  await ctx.validate(
    {
      name: "required|maxLength:30",
      email: "required|email",
      password: "required|minLength:6"
    },
    attributes
  );
  const saltRounds = 10;
  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(attributes.password, saltRounds, function(err, hash) {
      if (err) reject(err);
      resolve(hash);
    });
  });
  let user = await User.create({
    name: attributes.name,
    hashedPassword,
    email: attributes.email
  });
  ctx.body = user;
}

async function login(ctx) {}

module.exports = { login, register };
