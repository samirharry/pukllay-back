const KoaRouter = require('koa-router')
const loginController = require('../controllers/login')
const loginValidation = require('../validation/login')
const guest = require('../middlewares/guest')
const router = new KoaRouter()

router
  .post('/', guest(), loginValidation.login, loginController.login)

module.exports = router
