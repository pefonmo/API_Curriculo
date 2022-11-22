const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
  name: String,
  graduation: String,
  experience: String,
  skills: String,
})

module.exports = Person
