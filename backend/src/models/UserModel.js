const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  office: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Users', UserSchema);

