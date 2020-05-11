const Koa = require('koa')
const logger = require('koa-logger')
const helmet = require('koa-helmet')
const cors = require('koa2-cors')
const bodyParser = require('koa-body')
const compress = require('koa-compress')

const router = require('./routes/router')
const errorHandler = require('./middlewares/errorHandler')

const app = new Koa()

// database connecting
app.use(logger())
app.use(cors())
app.use(bodyParser())
app.use(helmet())
app.use(compress())
app.use(errorHandler())

app.use(router.routes())

module.exports = app
