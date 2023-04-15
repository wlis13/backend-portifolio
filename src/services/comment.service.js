const { Comment } = require('../models');

const createCommentService = async (newComment) => {
  const createdComment = await Comment.create(newComment);
  return createdComment;
};

module.exports = {
  createCommentService,
}