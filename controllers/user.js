const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = {
  async store (ctx) {
    const { body } = ctx.request
    body.password = await bcrypt.hash(body.password, 12)
    await new User(body).save()
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
