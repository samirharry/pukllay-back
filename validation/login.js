const Joi = require('@hapi/joi')

module.exports = {
  async loginAdmin (ctx, next) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required()
    })
    const { error } = schema.validate(ctx.request.body)
    if (error) ctx.throw(400, { ok: false, data: { message: error.details[0].message } })
    await next()
  },
  async loginTeacher (ctx, next) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required()
    })
    const { error } = schema.validate(ctx.request.body)
    if (error) ctx.throw(400, { ok: false, data: { message: error.details[0].message } })
    await next()
  }

}
