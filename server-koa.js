const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = "Hello Koa!";
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3001, () => {
  console.log("服务运行在 http://192.168.1.62:3001");
});
