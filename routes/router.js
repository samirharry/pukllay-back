const KoaRouter = require('koa-router')
const router = new KoaRouter()

router
  .use(require('./login').routes())

module.exports = router
