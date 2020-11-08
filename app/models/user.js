const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema(
  {
    name: { type: String, required: true },
    admin: { type: Boolean, default: 0 },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
