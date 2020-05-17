const Joi = require('@hapi/joi')

module.exports = {
  async storeAdmin (ctx, next) {
    console.log('sotring admin')
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      name: Joi.string().required()
    })
    const { error } = schema.validate(ctx.request.body)
    if (error) ctx.throw(400, { ok: false, data: { message: error.details[0].message } })
    await next()
  },
  async storeTeacher (ctx, next) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      name: Joi.string().required()
    })
    const { error } = schema.validate(ctx.request.body)
    if (error) ctx.throw(400, { ok: false, data: { message: error.details[0].message } })
    await next()
  },
  async searchById (ctx, next) {
    console.log(ctx.params)
    const schema = Joi.object({
      id: Joi.string().required().length(24)
    })
    ctx.body = ctx.request

    const { error } = schema.validate(ctx.params)
    if (error) ctx.throw(400, { ok: false, data: { message: error.details[0].message } })
    await next()
  },
  async searchByEmail (ctx, next) {
    console.log(ctx.params)
    const schema = Joi.object({
      email: Joi.string().required().email()
    })
    ctx.body = ctx.request

    const { error } = schema.validate(ctx.params)
    if (error) ctx.throw(400, { ok: false, data: { message: error.details[0].message } })
    await next()
  },
  async edit (ctx, next) {
    const schema = Joi.object({
      id: Joi.string().required().length(24),
      email: Joi.string().email().required(),
      name: Joi.string().required(),
      role: Joi.string().required().valid('ADMIN', 'TALLERISTA')
    })
    const { error } = schema.validate({ ...ctx.request.body, ...ctx.params })
    if (error) ctx.throw(400, { ok: false, data: { message: error.details[0].message } })
    await next()
  },
  async activate (ctx, next) {
    const body = Joi.object({
      id: Joi.string().required().length(24)
    })
    const { error } = body.validate(ctx.params)
    if (error) ctx.throw(400, { ok: false, data: { message: error.details[0].message } })
    await next()
  },
  async inactivate (ctx, next) {
    const body = Joi.object({
      id: Joi.string().required().length(24)
    })
    const { error } = body.validate(ctx.params)
    if (error) ctx.throw(400, { ok: false, data: { message: error.details[0].message } })
    await next()
  },
  async delete (ctx, next) {
    const body = Joi.object({
      id: Joi.string().required().length(24)
    })
    const { error } = body.validate(ctx.params)
    if (error) ctx.throw(400, { ok: false, data: { message: error.details[0].message } })
    await next()
  }

}
