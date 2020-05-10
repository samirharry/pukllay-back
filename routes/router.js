const KoaRouter = require('koa-router')
const router = new KoaRouter()
const loginController = require('../controllers/login')

router
  .use('/login', require('./login').routes())

module.exports = router
