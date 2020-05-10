const mongoose = require('mongoose')
const uniqueValidator = require('mongoose')
const schema = new mongoose.Schema({
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role'
  },
  name: {
    type: String,
    required: true
  },
  observation: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
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
})

schema.plugin(uniqueValidator)

module.exports = ('Member', schema)
