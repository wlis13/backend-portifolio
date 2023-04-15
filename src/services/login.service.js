const { User } = require("../models");


const loginService = async (userEmail) => {
  const getUser = await User.findOne({
    where: { userEmail }
  })
  return getUser;
};

module.exports = loginService;