const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const SECRET = process.env.SECRET;

const generateToken = async (payload) => {
  const token = jwt.sign({...payload}, SECRET, { algorithm: 'HS256' });
  return token;
};

module.exports = {
  generateToken,
};