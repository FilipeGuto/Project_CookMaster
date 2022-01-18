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

module.exports = {
  modelCreateRecipe,
  modelFindRecipes,
};
