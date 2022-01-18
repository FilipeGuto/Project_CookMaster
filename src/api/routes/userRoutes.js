const express = require('express');
const {
  controllerCreateUser,
  controllerLogin,
} = require('../controllers/usersControllers');
const {
  controllerCreateRecipe,
  controllerListRecipe,
} = require('../controllers/recipesControllers');
const auth = require('../middlewares/auth');

const routerUsers = express.Router();

routerUsers.get('/users', () => console.log('Funcionano'));
routerUsers.post('/users', controllerCreateUser);
routerUsers.post('/login', controllerLogin);
routerUsers.post('/recipes', auth, controllerCreateRecipe);
routerUsers.get('/recipes', controllerListRecipe);

module.exports = routerUsers;