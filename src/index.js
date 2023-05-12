const express = require('express');
const cors = require('cors');
const loginRoutes = require('./routes/login.routes');
const commentRoutes = require('./routes/comment.routes');
const registerRoutes = require('./routes/register.routes');

const app = express();
app.use(express.json());
app.use(cors({ origin: ['http://localhost:3000', 'https://portifolio-one-lilac.vercel.app/']}));

const PORT = process.env.MYSQL_PORT;

app.use('/', loginRoutes);
app.use('/', commentRoutes);
app.use('/', registerRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta 3001${PORT}`));