const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = require('../models/User')

module.exports = {
  async storeAdmin (ctx) {
    const body = { ...ctx.request.body, isAdmin: true, isTeacher: true }
    body.password = await bcrypt.hash(body.password, 12)
    await new User({ ...body, createdBy: ctx.state.user._id, modifiedBy: ctx.state.user._id }).save()
    ctx.status = 201
    ctx.body = {
      ok: true,
      data: {
        message: 'Usuario Creado con exito'
      }
    }
  },
  async storeTeacher (ctx) {
    const body = { ...ctx.request.body, isAdmin: false, isTeacher: true }
    body.password = await bcrypt.hash(body.password, 12)
    await new User({ ...body, createdBy: ctx.state.user._id, modifiedBy: ctx.state.user._id }).save()
    ctx.status = 201
    ctx.body = {
      ok: true,
      data: {
        message: 'Usuario Creado con exito'
      }
    }
  },

  async  searchById (ctx) {
    const { params } = ctx
    console.log(params)
    const user = await User.findOne({ _id: mongoose.Types.ObjectId(params.id), status: { $in: ['ACTIVE', 'INACTIVE'] } }, '-password').lean()
    if (!user) ctx.throw(400, { ok: false, data: { message: 'Usuario no encontrado' } })
    ctx.body = {
      ok: true,
      data: {
        user
      }
    }
  },
  async searchByEmail (ctx) {
    const { params } = ctx
    console.log(params)
    const user = await User.findOne({ email: params.email, status: { $in: ['ACTIVE', 'INACTIVE'] } }, '-password').lean()
    if (!user) ctx.throw(400, { ok: false, data: { message: 'Usuario no encontrado' } })
    ctx.body = {
      ok: true,
      data: {
        user
      }
    }
  },
  async edit (ctx) {
    const { params } = ctx
    const { body } = ctx.request
    const user = await User.findByIdAndUpdate(params.id, { ...body, modifiedBy: ctx.state.user._id })
    if (!user) ctx.throw(400, { ok: false, data: { message: 'Usuario no encontrado' } })
    ctx.body = {
      ok: true,
      data: {
        message: 'Usuario actualizado con exito'
      }
    }
  },
  async inactivate (ctx) {
    const { params } = ctx
    const user = await User.findByIdAndUpdate(params.id, { status: 'INACTIVE', modifiedBy: ctx.user._id })
    if (!user) ctx.throw(400, { ok: false, data: { message: 'Usuario no encontrado' } })
    ctx.body = {
      ok: true,
      data: {
        message: 'Usuario actualizado con exito'
      }
    }
  },
  async activate (ctx) {
    const { params } = ctx
    const user = await User.findByIdAndUpdate(params.id, { status: 'ACTIVE', modifiedBy: ctx.user._id })
    if (!user) ctx.throw(400, { ok: false, data: { message: 'Usuario no encontrado' } })
    ctx.body = {
      ok: true,
      data: {
        message: 'Usuario actualizado con exito'
      }
    }
  },
  async delete (ctx) {
    const { params } = ctx
    const user = await User.findByIdAndUpdate(params.id, { status: 'DELETED', modifiedBy: ctx.user._id })
    if (!user) ctx.throw(400, { ok: false, data: { message: 'Usuario no encontrado' } })
    ctx.body = {
      ok: true,
      data: {
        message: 'Usuario eliminado con exito'
      }
    }
  }
}
