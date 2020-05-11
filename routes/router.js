const KoaRouter = require('koa-router')
const router = new KoaRouter()

router
  .use('/login', require('./login').routes())
  .use('/user', require('./user').routes())

module.exports = router
