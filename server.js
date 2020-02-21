const Koa = require("koa");
const app = new Koa();
const validator = require("node-input-validator");
const router = require("./router");
const bodyParser = require("koa-bodyparser");

app.use(bodyParser());
app.use(validator.koa());
app.use(router.routes());

module.exports = app.listen(process.env.PORT);