const registerUser = require("../services/register.service");

async function registerController(req, res) {
  try {
    const infoRegister = req.body;
    const createdRegister = await registerUser(infoRegister);
    res.status(201).json(createdRegister);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = registerController;