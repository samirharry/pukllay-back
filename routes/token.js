const KoaRouter = require('koa-router')
const router = new KoaRouter()

router
  .post('/validation', (ctx) => { ctx.body = { ok: true, data: { message: 'El token es valido' } } })

module.exports = router
