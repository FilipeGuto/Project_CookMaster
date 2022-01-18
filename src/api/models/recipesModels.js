const { ObjectId } = require('mongodb');
const connect = require('./connection');

const modelCreateRecipe = async (recipe) => {
  const conn = await connect();
  const { insertedId } = await conn.collection('recipes').insertOne({ ...recipe });

  return ObjectId(insertedId);
};

module.exports = {
  modelCreateRecipe,
};
