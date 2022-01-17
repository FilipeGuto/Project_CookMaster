const connect = require('./connection');

const modelCreateUser = async (name, email, password) => {
  const conn = await connect();

  const newUser = {
    name,
    email,
    password,
    role: 'user',
  };

  const { insertedId } = await conn.collection('users').insertOne(newUser);
  const createNewUser = {
    user: {
      name,
      email,
      role: 'user',
      _id: insertedId,
    },
  };

  return createNewUser;
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
