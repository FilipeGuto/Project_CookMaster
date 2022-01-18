const {
  servicesCreateUser,
  servicesLogin,
} = require('../services/usersServices');
const { created, success } = require('../utils/dictionary/statusCode');

const controllerCreateUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await servicesCreateUser(name, email, password);

    return res.status(created).json(newUser);
  } catch (error) {
    console.log(`POST CREATE USER -> ${error.message}`);
    return next(error);
  }
};

const controllerLogin = async (req, res, next) => {
try {
  const { email, password } = req.body;
  const loginUser = await servicesLogin(email, password);

  return res.status(success).json(loginUser);
} catch (error) {
  console.log(`POST LOGIN -> ${error.message}`);
    return next(error);
}
};

module.exports = {
  controllerCreateUser,
  controllerLogin,
};
