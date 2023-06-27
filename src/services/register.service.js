const register = require("../model/register.model");

async function registerService(newRegister) {
  await register.insertMany(newRegister);
};

module.exports = {
  registerService,
};
