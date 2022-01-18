const {
  modelCreateUser,
  modelFindByEmail,
} = require('../models/usersModels');
const errorMessage = require('../utils/errorMessage');
const {
  userSchema,
  loginSchema,
} = require('../schema/schema');
const { generateToken } = require('./authService');
const { badRequest, conflict, unauthorized } = require('../utils/dictionary/statusCode');

const servicesCreateUser = async (name, email, password) => {
  const { error } = userSchema.validate({ name, email, password });
  if (error) {
    throw errorMessage(badRequest, 'Invalid entries. Try again.');
  }

  const emailExists = await modelFindByEmail(email);
  if (emailExists) throw errorMessage(conflict, 'Email already registered');

  const role = 'user';

  const idUser = await modelCreateUser(name, email, password, role);

  const user = {
    name,
    email,
    role,
    _id: idUser,
  };

  return { user };
};

const servicesLogin = async (email, password) => {
  const { error } = loginSchema.validate({ email, password });
  if (error) {
    throw errorMessage(unauthorized, 'All fields must be filled');
  }

  const user = await modelFindByEmail(email);

  if (!user || user.password !== password) {
    throw errorMessage(unauthorized, 'Incorrect username or password');
  }

  const { password: _password, name: _name, ...userWithoutPassword } = user;
  const token = generateToken(userWithoutPassword);

  return ({ token });
};

module.exports = {
  servicesCreateUser,
  servicesLogin,
};
