const { ObjectId } = require('mongodb');
const connect = require('./connection');

const modelCreateUser = async (name, email, password, role) => {
  const conn = await connect();
  console.log(conn);
  const { insertedId } = await conn.collection('users').insertOne({
    name, email, password, role,
  });

  return ObjectId(insertedId);
};

const modelFindByEmail = async (email) => {
  const conn = await connect();
  const userByEmail = await conn.collection('users').findOne({ email });

  return userByEmail;
};

module.exports = {
  modelCreateUser,
  modelFindByEmail,
};
