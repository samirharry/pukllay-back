const mongoose = require('mongoose')
const { MONGO_URL } = process.env

module.exports = () => {
  mongoose.Promise = global.Promise
  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const db = mongoose.connection

  db.on('error', (err) => { throw new Error(`error connecting to db: ${err}`) })

  db.once('open', () => console.log('database connect'))
}
