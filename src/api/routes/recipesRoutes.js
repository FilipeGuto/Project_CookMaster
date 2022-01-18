const express = require('express');
const {
  controllerCreateRecipe,
  controllerListRecipe,
  controllerRecipeById,
  controllerUpdateRecipe,
} = require('../controllers/recipesControllers');
const auth = require('../middlewares/auth');

const routerRecipes = express.Router();

routerRecipes.post('/recipes', auth, controllerCreateRecipe);
routerRecipes.get('/recipes', controllerListRecipe);
routerRecipes.get('/recipes/:id', controllerRecipeById);
routerRecipes.put('/recipes/:id', auth, controllerUpdateRecipe);

module.exports = routerRecipes;