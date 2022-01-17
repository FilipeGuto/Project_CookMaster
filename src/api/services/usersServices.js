const {
  modelCreateUser,
  modelFindByEmail,
} = require('../models/usersModels');
const errorMessage = require('../utils/errorMessage');
const { badRequest, conflict } = require('../utils/dictionary/statusCode');

const servicesCreateUser = async (name, email, password) => {
  const emailValid = /[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  if (!name || !password || !emailValid.test(email)) {
    throw errorMessage(badRequest, 'Invalid entries. Try again.');
  }

  const emailExists = await modelFindByEmail(email);
  if (emailExists) throw errorMessage(conflict, 'Email already registered');

  const newUser = await modelCreateUser(name, email, password);

  return newUser;
};

module.exports = {
  servicesCreateUser,
};
