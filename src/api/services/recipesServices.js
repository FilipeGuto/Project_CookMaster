const {
  modelCreateRecipe,
} = require('../models/recipesModels');
const errorMessage = require('../utils/errorMessage');
const { recipesSchema } = require('../schema/schema');
const { badRequest } = require('../utils/dictionary/statusCode');

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

module.exports = {
  servicesCreateRecipe,
};
