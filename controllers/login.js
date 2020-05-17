const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const User = require('../models/User')

module.exports = {
  async login (ctx) {
    const { body } = ctx.request
    console.log(body)
    const user = await User.findOne({ email: body.email, status: 'ACTIVE' }, 'id password name isAdmin isTeacher').populate('level.name', 'name').lean()
    if (!user) ctx.throw(401, { ok: false, data: { message: 'usuario no existe' } })
    const isValid = await bcrypt.compare(body.password, user.password)
    if (!isValid) ctx.throw(401, { ok: false, data: { message: 'contraseña equivocada' } })
    delete user.password
    if ((body.level === 'ADMIN' && !user.isAdmin) || (body.level === 'TALLERISTA' && !user.isTeacher)) ctx.throw(401, { ok: false, data: { message: 'Error, nivel de usuario invalido' } })
    user.level = body.level
    ctx.body = {
      ok: true,
      data: {
        token: jsonwebtoken.sign({
          data: user,
          exp: Math.floor(Date.now() / 1000) + (60 * 60)
        }, process.env.JWT_SECRET)
      }
    }
  }
}
