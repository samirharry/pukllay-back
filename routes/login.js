const KoaRouter = require('koa-router')

const loginController = require('../controllers/login')
const guest = require('../middlewares/guest')
const router = new KoaRouter()

router
  .use()
  .post('/', guest(), loginController.login)

module.exports = router
