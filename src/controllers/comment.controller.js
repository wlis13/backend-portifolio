const { createCommentService } = require("../services/comment.service");
const loginService = require("../services/login.service");

const createCommentController = async (req, res) => {
  const { email, comment } = req.body;
  const { id } = await loginService(email);
  const valueComment = {
    comment,
    id,
  };
  const createdComment = await createCommentService(valueComment);
  res.status(201).json(createdComment);
};

module.exports = {
  createCommentController,
};