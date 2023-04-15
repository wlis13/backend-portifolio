const { Router } = require('express');
const { createCommentController } = require('../controllers/comment.controller');

const commentRoutes = Router();

commentRoutes.post('/create-comment', createCommentController);

module.exports = commentRoutes;
