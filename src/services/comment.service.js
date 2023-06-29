const comment = require("../model/tableComment.model");

async function findComments() {
  const getComments = await comment.find().exact();
  return getComments;
};

async function insertComments(newComment) {
  await comment.insertMany(newComment);
};

module.exports = {
  findComments,
  insertComments,
};
