const { Router } = require('express');
const loginController = require('../controllers/loginController');
const { validateFieldsLogin, validateFormatLogin } = require('../middlewares/validateLogin');

const loginRoutes = Router();

loginRoutes.post('/login', 
validateFieldsLogin, 
validateFormatLogin, 
loginController,
);

module.exports = loginRoutes;
