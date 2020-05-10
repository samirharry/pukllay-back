const mongoose = require('mongoose')
const uniqueValidator = require('mongoose')
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
    enum: ['ADMIN', 'TALLERISTA']
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

module.exports = ('User', schema)
