const express = require('express');
const { validateName, validatePrice, validateDescription } = require('./middlewares/validateActivity');
const generateToken = require('./utils/generateToken');
const auth = require('./middlewares/auth');

const app = express();

app.use(express.json);

app.post('/activities', auth, validateName, validatePrice, validateDescription, (_req, res) => res.status(201).json({
   message: "Atividade cadastrada com sucesso!" 
  }))

app.post('/signup', validateSignUp, (_req, res) => res.status(200).json({
  token: generateToken(),
}))

module.exports = app;