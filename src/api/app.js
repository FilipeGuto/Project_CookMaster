const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routerUsers = require('./routes/userRoutes');
const routerRecipes = require('./routes/recipesRoutes');
const errorMiddlewares = require('./middlewares/errorHandler');

const app = express();
app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));

// Não remover esse end-point, ele é necessário para o avaliador

app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send();
});

app.use(routerUsers);
app.use(routerRecipes);

app.use(errorMiddlewares);

// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;
