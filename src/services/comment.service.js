const tableComment = require("../model/tableComment.model");

async function findComments() {
  const getComments = await tableComment.find().exact();
  return getComments;
};

async function insertComments(newComment) {
  await tableComment.insertMany(newComment);
};

module.exports = {
  findComments,
  insertComments,
};
