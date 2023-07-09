const comment = require("../model/tableComment.model");

async function findComments() {
  try {
    const getComments = await comment.find();
    return getComments;
  } catch (error) {
    console.log("Erro ao buscar comentário" + error);
    throw error;
  }
};

async function insertComments(newComment) {
  try {
    await comment.insertMany(newComment);
  } catch (error) {
    console.log(`Erro ao tentar inserir novo comentário ${error}`);
    throw error;
  }
};

module.exports = {
  findComments,
  insertComments,
};
