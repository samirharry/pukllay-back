const bcrypt = require('bcrypt')
const User = require('../models/User')
const Admin = require('../models/Admin')
const Teacher = require('../models/Teacher')

module.exports = {
  async store (ctx) {
    const { body } = ctx.request
    body.password = await bcrypt.hash(body.password, 12)
    const user = await new User({ ...body, createdBy: ctx.state.user._id, modifiedBy: ctx.state.user._id }).save()
    await Teacher({ user: user.id, createdBy: ctx.state.user._id, modifiedBy: ctx.state.user._id }).save()
    if (user.role === 'ADMIN') await Admin({ user: user.id, createdBy: ctx.state.user._id, modifiedBy: ctx.state.user._id }).save()
    ctx.status = 201
    ctx.body = {
      ok: true,
      data: {
        message: 'Usuario Creado con exito'
      }
    }
  },
  async search (ctx) {
    const { body } = ctx.request
    const user = await User()
  },
  async edit (ctx) {
    const { body } = ctx.request
    const user = await User()
  },
  async delete (ctx) {
    const { body } = ctx.request
    const user = await User()
  }
}
