const KoaRouter = require('koa-router')
const jwt = require('koa-jwt')
const payload = require('../middlewares/payload')
const router = new KoaRouter()

router
  .use('/login', require('./login').routes())
  .use(jwt({ secret: process.env.JWT_SECRET }))
  .use(payload())
  .use('/code', require('./code').routes())
  .use('/course', require('./course').routes())
  .use('/file', require('./file').routes())
  .use('/lesson', require('./lesson').routes())
  .use('/member', require('./member').routes())
  .use('/role', require('./role').routes())
  .use('/team', require('./team').routes())
  .use('/token', require('./token').routes())
  .use('/user', require('./user').routes())

module.exports = router
