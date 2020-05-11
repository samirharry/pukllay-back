const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const User = require('../models/User')

module.exports = {
  async login (ctx) {
    const { body } = ctx.request
    const user = await User.findOne({ email: body.email, status: 'ACTIVE' }, 'id password name role')
    console.log(user)
    if (!user) ctx.throw(404, { ok: false, data: { message: 'usuario no existe' } })
    const isValid = await bcrypt.compare(body.password, user.password)
    if (!isValid) ctx.throw(404, { ok: false, data: { message: 'contraseña equivocada' } })
    delete user.password
    ctx.body = {
      ok: true,
      data: {
        token: jsonwebtoken.sign({
          data: user,
          exp: Math.floor(Date.now() / 1000) - (60 * 60)
        }, process.env.JWT_SECRET)
      }
    }
  }
}
