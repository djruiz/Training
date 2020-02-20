const Router = require("koa-router");
const router = new Router();
const users = require("./middleware/users");

router.get("/test", ctx => {
  ctx.body = "Test";
});

router.get("/", ctx => {
  ctx.body = "Home";
});

router.post("/users", users.register);
router.post("/users/login", users.login);

module.exports = router;
