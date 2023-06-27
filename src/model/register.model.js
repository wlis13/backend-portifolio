const mongoose = require('mongoose');

const register = mongoose.model("register", {
  name: String,
  password: String
});

module.exports = register;
