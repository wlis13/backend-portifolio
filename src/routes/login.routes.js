const { Router } = require('express');
const loginController = require('../controllers/login.controller');
// const { validateFieldsLogin, validateFormatLogin } = require('../middlewares/validateLogin');

const loginRoutes = Router();

loginRoutes.get('/login', 
// validateFieldsLogin, 
// validateFormatLogin, 
loginController,
);

module.exports = loginRoutes;
