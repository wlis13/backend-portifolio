const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const loginRoutes = require('./routes/login.routes');
const commentRoutes = require("./routes/comment.routes");
const registerRoutes = require('./routes/register.routes');

const app = express();
app.use(express.json());
app.use(cors('http://localhost:3000'));

const PORT = process.env.PORT;

// app.use('/', loginRoutes);
app.use('/', commentRoutes);
app.use('/', registerRoutes);

mongoose.connect('mongodb+srv://wlissesfernando285:SSQDk9wxVNF7UID2@cluster0.2jstabj.mongodb.net/')
  .then(() => {
    console.log('Connect database success');
    app.listen(PORT)
  });
