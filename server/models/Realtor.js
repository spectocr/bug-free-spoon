
const mongoose = require('mongoose');
const { Schema } = mongoose;
const Reactions = require('./Reactions');


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

  },
  // reactions: [Reactions.schema]
});
const Realtor = mongoose.model('Realtor', realtorSchema);
module.exports = Realtor;



