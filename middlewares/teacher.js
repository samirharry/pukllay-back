module.exports = () =>
  async (ctx, next) => {
    const { isTeacher } = ctx.state.user
    if (!isTeacher) ctx.throw(403, { ok: false, data: { message: 'Permisos insuficientes' } })
    await next()
  }
