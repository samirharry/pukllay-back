const { ObjectId } = require('mongoose').Types
const User = require('../models/User')
const Teacher = require('../models/Teacher')
const Admin = require('../models/Admin')
const jsonwebtoken = require('jsonwebtoken')

module.exports = () => {
  return async (ctx, next) => {
    const token = ctx.headers.authorization.split(' ')[1]
    const { data } = jsonwebtoken.verify(token, process.env.JWT_SECRET)
    console.log(data)
    const user = await User.findOne({ _id: ObjectId(data._id), status: 'ACTIVE' }, 'name').lean()
    if (!user) ctx.throw(401, { ok: false, data: { message: 'Rol equivocado' } })
    const role = (data.role === 'ADMIN') ? await Admin.findOne({ _id: ObjectId(data.role_id), status: 'ACTIVE' }, 'id').lean() : await Teacher.findOne({ _id: ObjectId(data.role_id), status: 'ACTIVE' }).lean()
    if (!role) ctx.throw(401, { ok: false, data: { message: 'Rol equivocado' } })
    user.role = data.role
    ctx.state.user = {
      ...user,
      role_id: role._id
    }
    await next()
  }
}
