const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'testando' });
})

app.listen(3001, () => console.log('Servidor rodando na porta 3001'));