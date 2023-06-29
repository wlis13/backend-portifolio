const mongoose = require('mongoose');

const comment = mongoose.model("comments", {
  name: String,
  comment: String,
  likes: Number,
  delikes: Number,
  response: String
});

module.exports = comment;
