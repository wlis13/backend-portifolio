const { User } = require('../models');

async function registerUser(newUser) {
  const NewUser = await User.create({ ...newUser, role: 'user' });
  return NewUser;
}

module.exports = registerUser;