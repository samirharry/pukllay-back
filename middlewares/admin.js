module.exports = () =>
  async (ctx, next) => {
    const { role } = ctx.state.user
    console.log(role)
    if (role !== 'ADMIN') ctx.throw(403, { ok: false, data: { message: 'Permisos insuficientes' } })
    await next()
  }
