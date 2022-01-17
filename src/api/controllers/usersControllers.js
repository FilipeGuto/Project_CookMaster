const { servicesCreateUser } = require('../services/usersServices');
const { created } = require('../utils/dictionary/statusCode');

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

module.exports = {
  controllerCreateUser,
};
