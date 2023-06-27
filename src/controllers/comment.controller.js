const { insertComments, findComments } = require("../services/comment.service");

async function findCommentsController(_req, res) {
  try {
    const getComments = await findComments();
    res.status(200).json(getComments);
  } catch (error) {
    return "Houve algum erro ao buscar comentários";
  }
};

async function insertCommentController(req, res) {
  try {
    const getComment = req.body;
    await insertComments(getComment);
    res.status(201).json({ message: "comentário inserido com sucesso!" });
  } catch (error) {
    return "Houve algum erro ao inserir comentário";
  }
};

module.exports = {
  insertCommentController,
  findCommentsController,
};
