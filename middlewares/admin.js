module.exports = () =>
  async (ctx, next) => {
    const { isAdmin, level } = ctx.state.user
    if (!isAdmin || level !== 'ADMIN') ctx.throw(403, { ok: false, data: { message: 'Permisos insuficientes' } })
    await next()
  }
