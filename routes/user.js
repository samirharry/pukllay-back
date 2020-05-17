const KoaRouter = require('koa-router')
const admin = require('../middlewares/admin')
const controller = require('../controllers/user')
const validation = require('../validation/user')
const router = new KoaRouter()

router
  .use(admin())
  .get('/id/:id', validation.searchById, controller.searchById)
  .get('/email/:email', validation.searchByEmail, controller.searchByEmail)
  .post('/admin', validation.storeAdmin, controller.storeAdmin)
  .post('/tallerista', validation.storeTeacher, controller.storeTeacher)
  .post('/:id/activate', controller.activate)
  .delete('/:id/inactivate', controller.inactivate)
  .put('/:id/edit', controller.edit)
  .delete('/:id/delete', controller.delete)

module.exports = router
