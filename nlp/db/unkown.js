const mongoose = require('mongoose')

const unknownSchema = new mongoose.Schema({
  data: mongoose.Schema.Types.String,
  understood: mongoose.Schema.Types.Mixed,
  created: mongoose.Schema.Types.Date
})

module.exports = mongoose.model('Unkown', unknownSchema)
