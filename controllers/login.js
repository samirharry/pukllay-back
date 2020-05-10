const User = require('../models/User')

module.exports = {
  async login (ctx) {
    const { body } = ctx.request
    const user = await User.findOne({ email: body.email, status: 'ACTIVE' })
    console.log(!user)
    if (!user) ctx.throw(404, { ok: false, message: 'usuario no existe' })
    ctx.body = {
      ok: true,
      data: {
        token: 'asas'
      }
    }
  }
}
