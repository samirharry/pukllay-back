const KoaRouter = require('koa-router')

const userController = require('../controllers/user')
const router = new KoaRouter()

router
  .get('/', userController.search)
  .post('/', userController.store)
  .put('/', userController.edit)
  .delete('/', userController.delete)

module.exports = router
