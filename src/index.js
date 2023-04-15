const express = require('express');
const loginRoutes = require('./routes/login.routes');
// const commentRoutes = require('./routes/comment.routes');
// const registerRoutes = require('./routes/register.routes');

const app = express();
app.use(express.json());

app.use('/', loginRoutes);
// app.use('/', commentRoutes);
// app.use('/', registerRoutes);

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'testando' });
});

app.listen(3001, () => console.log('Servidor rodando na porta 3001'));