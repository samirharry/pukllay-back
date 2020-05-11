const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['ADMIN', 'TALLERISTA'],
    default: 'TALLERISTA'
  },
  createdAt: {
    type: Date, default: Date.now
  },
  modifiedAt: {
    type: Date, default: Date.now
  },
  status: {
    type: String,
    enum: ['ACTIVE', 'DELETED', 'INACTIVE'],
    default: 'ACTIVE'
  }
})

schema.plugin(uniqueValidator)

module.exports = mongoose.model('User', schema)
