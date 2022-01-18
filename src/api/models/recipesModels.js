const { ObjectId } = require('mongodb');
const connect = require('./connection');

const modelCreateRecipe = async (recipe) => {
  const conn = await connect();
  const { insertedId } = await conn.collection('recipes').insertOne({ ...recipe });

  return ObjectId(insertedId);
};

const modelFindRecipes = async () => {
  const conn = await connect();
  const query = await conn.collection('recipes').find().toArray();

  return query;
};

const modelsRecipeById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const conn = await connect();
  const recipeId = await conn.collection('recipes').findOne({ _id: ObjectId(id) });

  return recipeId;
};

module.exports = {
  modelCreateRecipe,
  modelFindRecipes,
  modelsRecipeById,
};
