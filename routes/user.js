const KoaRouter = require('koa-router')
const admin = require('../middlewares/admin')
const userController = require('../controllers/user')
const userValidation = require('../validation/user')
const router = new KoaRouter()

router
  .use(admin())
  .get('/', userController.search)
  .post('/', userValidation.store, userController.store)
  .put('/', userController.edit)
  .delete('/', userController.delete)

module.exports = router
