const crypto = require('crypto');

const hashPassword = (password) => {
  const passwordToHash = crypto.createHash('md5').update(password).digest('hex');
  return passwordToHash;
};

const comparePasswords = (password, hashToCompare) => {
  const passwordToHash = hashPassword(password);
  return passwordToHash === hashToCompare;
}

module.exports = {
  hashPassword,
  comparePasswords,
};