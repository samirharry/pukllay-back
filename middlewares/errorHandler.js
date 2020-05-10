module.exports = () => {
  return async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      console.log(err)
      ctx.status = 500
      ctx.body = {
        status: 'error',
        message: 'Ha ocurrido un error interno, intentelo de nuevo'
      }
    }
  }
}
