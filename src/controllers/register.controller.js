const { registerService } = require('../services/register.service');

async function registerController(req, res) {
  try {
    const getNewUser = req.body;
    await registerService(getNewUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerController
};