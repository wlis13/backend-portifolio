const registerUser = require("../services/register.service");

async function registerController(req, res) {
  const infoRegister = req.body;
  const createdRegister = await registerUser(infoRegister);
  res.status(201).json(createdRegister);
};

module.exports = registerController;