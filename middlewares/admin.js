module.exports = () =>
  async (ctx, next) => {
    const { isAdmin } = ctx.state.user
    if (!isAdmin) ctx.throw(403, { ok: false, data: { message: 'Permisos insuficientes' } })
    await next()
  }
