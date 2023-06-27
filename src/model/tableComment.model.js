const mongoose = require('mongoose');

const tableComment = mongoose.model("comments", {
  user: String,
  comment: String,
  likes: Number,
  delikes: Number,
  response: String
});

module.exports = tableComment;
