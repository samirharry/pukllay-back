module.exports = () => async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    console.log(err)
    ctx.status = err.status || 500
    ctx.body = {
      ok: false,
      data: {
        message: err.data.message
      }
    }
  }
}
