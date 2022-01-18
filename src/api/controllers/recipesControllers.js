const { servicesCreateRecipe } = require('../services/recipesServices');
const { created } = require('../utils/dictionary/statusCode');

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

module.exports = {
  controllerCreateRecipe,
};
