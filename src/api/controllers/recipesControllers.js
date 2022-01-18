const {
  servicesCreateRecipe,
  servicesFindRecipes,
  servicesRecipeById,
  servicesUpdateRecipe,
  servicesDeleteRecipe,
} = require('../services/recipesServices');
const { created, success } = require('../utils/dictionary/statusCode');

const controllerCreateRecipe = async (req, res, next) => {
  try {
    const { name, ingredients, preparation } = req.body;
    const { _id } = req.user;
    // const urlImg = 'img';

    const recipe = {
      name,
      ingredients,
      preparation,
      // urlImg,
      userId: _id,
    };

    const newRecipe = await servicesCreateRecipe(recipe);

    return res.status(created).json(newRecipe);
  } catch (error) {
    console.log(`POST CREATE RECIPE -> ${error.message}`);
    return next(error);
  }
};

const controllerListRecipe = async (req, res, next) => {
  try {
    const recipes = await servicesFindRecipes();

    return res.status(success).json(recipes);
  } catch (error) {
    console.log(`GET ALL RECIPES -> ${error.message}`);
    return next(error);
  }
};

const controllerRecipeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const recipeId = await servicesRecipeById(id);

    return res.status(success).json(recipeId);
  } catch (error) {
    console.log(`GET RECIPE BY ID -> ${error.message}`);
    return next(error);
  }
};

const controllerUpdateRecipe = async (req, res, next) => {
  try {
    const { id } = req.params;
    const recipeId = await servicesUpdateRecipe(id, req.body);

    return res.status(200).json(recipeId);
  } catch (error) {
    console.log(`UPDATE RECIPE BY ID -> ${error.message}`);
    return next(error);
  }
};

const controllerDeleteRecipe = async (req, res, next) => {
  try {
    const { id } = req.params;
    await servicesDeleteRecipe(id);

    return res.status(204).json();
  } catch (error) {
    console.log(`DELETE RECIPE BY ID -> ${error.message}`);
    return next(error);
  }
};

module.exports = {
  controllerCreateRecipe,
  controllerListRecipe,
  controllerRecipeById,
  controllerUpdateRecipe,
  controllerDeleteRecipe,
};
