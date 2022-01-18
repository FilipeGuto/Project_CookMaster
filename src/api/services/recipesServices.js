const {
  modelCreateRecipe,
  modelFindRecipes,
  modelsRecipeById,
} = require('../models/recipesModels');
const errorMessage = require('../utils/errorMessage');
const { recipesSchema } = require('../schema/schema');
const { badRequest, notFound } = require('../utils/dictionary/statusCode');

const servicesCreateRecipe = async (recipes) => {
  const { name, ingredients, preparation } = recipes;
  const { error } = await recipesSchema.validate({ name, ingredients, preparation });
  if (error) {
    throw errorMessage(badRequest, 'Invalid entries. Try again.');
  }

  const idRecipe = await modelCreateRecipe(recipes);

  const recipe = { ...recipes, _id: idRecipe };

  return { recipe };
};

const servicesFindRecipes = async () => {
  const recipes = await modelFindRecipes();

  return recipes;
};

const servicesRecipeById = async (id) => {
  const recipeId = await modelsRecipeById(id);
  if (recipeId === null) throw errorMessage(notFound, 'recipe not found');

  return recipeId;
};

module.exports = {
  servicesCreateRecipe,
  servicesFindRecipes,
  servicesRecipeById,
};
