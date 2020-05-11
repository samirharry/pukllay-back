const KoaRouter = require('koa-router')

const loginController = require('../controllers/login')
const guest = require('../middlewares/guest')
const router = new KoaRouter()

router
  .post('/', guest(), loginController.login)
  .delete('/', guest(), loginController.login)

module.exports = router
