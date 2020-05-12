const Joi = require('@hapi/joi')

module.exports = {
  async login (ctx, next) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      role: Joi.string().required().valid('ADMIN', 'TALLERISTA')
    })
    const { error } = schema.validate(ctx.request.body)
    if (error) ctx.throw(400, { ok: false, data: { message: error.details[0].message } })
    await next()
  }
}
