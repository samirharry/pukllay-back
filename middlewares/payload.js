const { ObjectId } = require('mongoose').Types
const User = require('../models/User')
const jsonwebtoken = require('jsonwebtoken')

module.exports = () => {
  return async (ctx, next) => {
    const token = ctx.headers.authorization.split(' ')[1]
    const { data } = jsonwebtoken.verify(token, process.env.JWT_SECRET)
    const user = await User.findOne({ _id: ObjectId(data._id), status: 'ACTIVE' }, 'name isAdmin isTeacher').lean()
    if (!user) ctx.throw(401, { ok: false, data: { message: 'Error en el usuario' } })
    user.level = data.level
    ctx.state.user = {
      ...user
    }
    await next()
  }
}
