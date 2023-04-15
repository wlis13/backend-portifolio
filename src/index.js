const express = require('express');
const cors = require('cors');
const loginRoutes = require('./routes/login.routes');
const commentRoutes = require('./routes/comment.routes');
const registerRoutes = require('./routes/register.routes');

const app = express();
app.use(express.json());
app.use(cors({ origin: 'https://backend-portifolio-eight.vercel.app'}));

app.use('/', loginRoutes);
app.use('/', commentRoutes);
app.use('/', registerRoutes);


app.listen(3001, () => console.log('Servidor rodando na porta 3001'));