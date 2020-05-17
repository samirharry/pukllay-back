module.exports = () =>
  async (ctx, next) => {
    const { isTeacher, level } = ctx.state.user
    if (!isTeacher || level !== 'TALLERISTA') ctx.throw(403, { ok: false, data: { message: 'Permisos insuficientes' } })
    await next()
  }
