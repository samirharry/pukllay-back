const KoaRouter = require('koa-router')

const loginController = require('../controllers/login')
const guest = require('../middlewares/guest')
const router = new KoaRouter()

router
  .post('/login', guest(), loginController.login)
  .delete('/login', guest(), loginController.login)

module.exports = router
