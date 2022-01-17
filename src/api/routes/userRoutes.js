const express = require('express');
const { controllerCreateUser } = require('../controllers/usersControllers');

const routerUsers = express.Router();

routerUsers.get('/users', () => console.log('Funcionano'));
routerUsers.post('/users', controllerCreateUser);

module.exports = routerUsers;