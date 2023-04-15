const loginService = require("../services/login.service");
// const { generateToken } = require("../utils/jwt");

const loginController = async (req, res) => {
  try {
    const getUsers = await loginService();
      res.status(200).json(getUsers);
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};

module.exports = loginController;

// try {
//   const { email } = req.body;
//   await loginService(email);
//   const token = await generateToken(req.body);
//     res.status(200).json({ token });
// } catch (error) {
//   res.status(500).json({ message: error.message }); 
// }