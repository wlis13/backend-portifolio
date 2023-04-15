const validateFieldsLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email) {
    res.status(401).json({ message: 'está faltando o campo email'});
  } else if (!password) {
    res.status(401).json({ message: 'está faltando o campo password'});
  }
  next();
};

const validateFormatLogin = (req, res, next) => {
  const { email, password } = req.body;
  const test = /\S+@\S+\.com/;
  if (!test.test(email)) {
    res.status(400).json({ message: 'o email está no formato incorreto' });
  } else if (password.length < 6) {
    res.status(400).json({ message: 'a senha deve ter 6 ou mais caracteres' });
  }
  next();
}

module.exports = {
  validateFieldsLogin,
  validateFormatLogin,
}
