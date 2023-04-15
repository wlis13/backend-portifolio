const connection = require('../database/connection');

const createCommentService = async ({ comment, id }) => {
  const createdComment = await connection.execute(`
    INSERT INTO railway.Comments(comment, userId)
      VALUES(?,?)`, 
    [comment, id]);
  return createdComment;
};

module.exports = {
  createCommentService,
}