const connection = require("../database/connection");


const loginService = async () => {
  const getUser = await connection.execute('SELECT * FROM railway.Users');
  return getUser;
};

module.exports = loginService;