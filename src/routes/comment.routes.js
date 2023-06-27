const { Router } = require('express');
const { findCommentsController, insertCommentController } = require("../controllers/comment.controller")

const commentRouter = Router();

commentRouter.get("/find", findCommentsController);
commentRouter.post("/insert-comment", insertCommentController);

module.exports = commentRouter;