const KoaRouter = require('koa-router')
const loginController = require('../controllers/login')
const loginValidation = require('../validation/login')
const guest = require('../middlewares/guest')
const router = new KoaRouter()

router
  .post('/admin', guest(), loginValidation.loginAdmin, loginController.loginAdmin)
  .post('/teacher', guest(), loginValidation.loginTeacher, loginController.loginTeacher)

module.exports = router
