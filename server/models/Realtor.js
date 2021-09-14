// Cris to convert to Realtor Model.

const mongoose = require('mongoose');

const { Schema } = mongoose;

const realtorSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  agency: {
    type: String
  }
});

const Realtor = mongoose.model('Realtor', realtorSchema);

module.exports = Realtor;
