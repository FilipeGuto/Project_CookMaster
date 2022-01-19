const express = require('express');
const {
  controllerCreateRecipe,
  controllerListRecipe,
  controllerRecipeById,
  controllerUpdateRecipe,
  controllerDeleteRecipe,
  controllerUploadImg,
} = require('../controllers/recipesControllers');
const uploadImage = require('../middlewares/imageMidd');
const auth = require('../middlewares/auth');

const routerRecipes = express.Router();

routerRecipes.post('/recipes', auth, controllerCreateRecipe);
routerRecipes.get('/recipes', controllerListRecipe);
routerRecipes.get('/recipes/:id', controllerRecipeById);
routerRecipes.put('/recipes/:id', auth, controllerUpdateRecipe);
routerRecipes.delete('/recipes/:id', auth, controllerDeleteRecipe);
routerRecipes.put('/recipes/:id/image/', auth, uploadImage.single('image'), controllerUploadImg);

module.exports = routerRecipes;