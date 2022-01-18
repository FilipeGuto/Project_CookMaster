const express = require('express');
const {
  controllerCreateUser,
  controllerLogin,
} = require('../controllers/usersControllers');

const routerUsers = express.Router();

routerUsers.get('/users', () => console.log('Funcionano'));
routerUsers.post('/users', controllerCreateUser);
routerUsers.post('/login', controllerLogin);

module.exports = routerUsers;