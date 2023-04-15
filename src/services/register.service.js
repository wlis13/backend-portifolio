const connection = require('../database/connection');

async function registerUser({name, password}) {
  const role = 'user';
  const NewUser = await connection.execute(`
  INSERT INTO railway.Users(userName, userPassword, role)
  VALUES(?,?,?)`,
  [name, password, role]);
  return NewUser;
}

module.exports = registerUser;