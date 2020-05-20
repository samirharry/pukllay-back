const KoaRouter = require('koa-router')
const jwt = require('koa-jwt')
const payload = require('../middlewares/payload')
const router = new KoaRouter()

router
  .use('/login', require('./login').routes())
  .use(jwt({ secret: process.env.JWT_SECRET }))
  .use(payload())
  .use('/token', require('./token').routes())
  .use('/user', require('./user').routes())

module.exports = router
