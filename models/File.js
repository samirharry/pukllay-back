const mongoose = require('mongoose')
const uniqueValidator = require('mongoose')
const schema = new mongoose.Schema({
  user: {
    type: mongoose.schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  extension: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  modifiedAt: {
    type: Date, default: Date.now
  },
  modifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['ACTIVE', 'DELETED', 'INACTIVE'],
    default: 'ACTIVE'
  }
}, {
  timestamps: { updatedAt: 'modifiedAt' }
})

schema.plugin(uniqueValidator)

module.exports = ('File', schema)
