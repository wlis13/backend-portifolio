const { createCommentService } = require("../services/comment.service");

const createCommentController = async (req, res) => {
  try {
    const { id, comment } = req.body;
  const valueComment = {
    comment,
    id,
  };
  const createdComment = await createCommentService(valueComment);
  res.status(201).json(createdComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCommentController,
};