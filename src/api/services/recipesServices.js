const {
  modelCreateRecipe,
  modelFindRecipes,
  modelsRecipeById,
  modelsUpdateRecipe,
  modelsDeleteRecipe,
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

const servicesUpdateRecipe = async (id, recipe) => {
  await modelsUpdateRecipe(id, recipe);

  const recipeById = await modelsRecipeById(id);

  return recipeById;
};

const servicesDeleteRecipe = async (id) => {
  await modelsDeleteRecipe(id);
};

module.exports = {
  servicesCreateRecipe,
  servicesFindRecipes,
  servicesRecipeById,
  servicesUpdateRecipe,
  servicesDeleteRecipe,
};
