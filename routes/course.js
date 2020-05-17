const KoaRouter = require('koa-router')
const admin = require('../middlewares/admin')
const teacher = require('../middlewares/teacher')
const controller = require('../controllers/course')
const validation = require('../validation/course')
const router = new KoaRouter()

router
  .get('/', validation.search, controller.search)
  .get('/:id', validation.searchById, controller.searchById)
  .get('/:code', validation.searchByCode, controller.searchByCode)
  .post('/admin', validation.storeAdmin, controller.storeAdmin)
  .post('/tallerista', validation.storeTeacher, controller.storeTeacher)
  .post('/:id/activate', controller.activate)
  .delete('/:id/inactivate', controller.inactivate)
  .put('/:id/edit', controller.edit)
  .delete('/:id/delete', controller.delete)

module.exports = router
