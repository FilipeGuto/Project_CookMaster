const jwt = require('jsonwebtoken');

const API_SECRET = 'ABCDEFGH876543210';

const JWT_CONFIG = {
  expiresIn: 60,
  algorithm: 'HS256',
};

const generateToken = (data) => jwt.sign({ data }, API_SECRET, JWT_CONFIG);

module.exports = {
  generateToken,
};
