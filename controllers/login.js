const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const User = require('../models/User')
const Teacher = require('../models/Teacher')
const Admin = require('../models/Admin')

module.exports = {
  async login (ctx) {
    const { body } = ctx.request
    console.log(body)
    const user = await User.findOne({ email: body.email, status: 'ACTIVE' }, 'id password name').lean()
    if (!user) ctx.throw(401, { ok: false, data: { message: 'usuario no existe' } })
    const isValid = await bcrypt.compare(body.password, user.password)
    if (!isValid) ctx.throw(401, { ok: false, data: { message: 'contraseña equivocada' } })
    delete user.password
    const role = (body.role === 'ADMIN') ? await Admin.findOne({ user: user._id, status: 'ACTIVE' }, 'id').lean() : await Teacher.findOne({ user: user._id, status: 'ACTIVE' }, 'id').lean()
    console.log(role)
    if (!role) ctx.throw(401, { ok: false, data: { message: 'Rol equivocado' } })
    user.role = body.role
    user.role_id = role._id
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
