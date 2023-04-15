const loginService = require("../services/login.service");
const registerUser = require("../services/register.service");

async function registerController(req, res) {
  try {
    const { name } = req.body;
    await registerUser(req.body);
    const getNewRegister = await loginService(name);
    res.status(201).json(getNewRegister);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = registerController;