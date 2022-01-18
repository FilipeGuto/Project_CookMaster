const express = require('express');
const routerUsers = require('./routes/userRoutes');
const routerRecipes = require('./routes/recipesRoutes');
const errorMiddlewares = require('./middlewares/errorHandler');

const app = express();

// Não remover esse end-point, ele é necessário para o avaliador

app.use(express.json());

app.get('/', (request, response) => {
  response.send();
});

app.use(routerUsers);
app.use(routerRecipes);

app.use(errorMiddlewares);

// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;
