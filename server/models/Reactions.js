const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionBody: {
      type: Boolean,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Reactions = mongoose.model('Reactions', reactionSchema);
module.exports = Reactions;