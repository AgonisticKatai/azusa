const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema
const collection = 'users'

const UserSchema = new Schema({
  name: String,
  lastname: String,
  email: String,
  telephone: String,
  profileImg: String,
  status: { type: String, default: 'Available' },
  createAt: { type: Date, default: Date.now }
}, { collection })

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', UserSchema)
