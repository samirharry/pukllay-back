module.exports = () =>
  async (ctx, next) => {
    const { role } = ctx.state.user
    if (role === 'TALLERISTA') { await next() }
    ctx.throw(403, { ok: false, data: { message: 'Permisos insuficientes' } })
  }
