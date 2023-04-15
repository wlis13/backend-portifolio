const { Router } = require('express');
const registerController = require('../controllers/register.controller');

const registerRoutes = Router();

registerRoutes.post('/register', registerController);

module.exports = registerRoutes;
