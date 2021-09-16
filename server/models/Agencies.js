const mongoose = require('mongoose');
const { Schema } = mongoose;
const agenciesSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});
const Agencies = mongoose.model('Agencies', agenciesSchema);
module.exports = Agencies;