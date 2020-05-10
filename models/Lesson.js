const mongoose = require('mongoose')
const uniqueValidator = require('mongoose')
const schema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher'
  },
  place: String,
  description: String,
  start_date: Date,
  end_date: Date,
  teams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team'
    }
  ],
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

module.exports = ('Lesson', schema)
