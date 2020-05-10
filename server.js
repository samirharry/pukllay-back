const app = require('./app')
const db = require('./db')

// start the server
const port = process.env.PORT || 3000

const server = async () => {
  await db()
  await app.listen(port)
  console.log(`Listening at port: ${port}`)
}

server()
