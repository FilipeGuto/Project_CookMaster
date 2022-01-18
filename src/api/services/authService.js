const jwt = require('jsonwebtoken');

const API_SECRET = 'ABCDEFGH876543210';

const JWT_CONFIG = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const generateToken = (data) => jwt.sign({ data }, API_SECRET, JWT_CONFIG);

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, API_SECRET);
    const user = decoded.data;

    return user;
  } catch (error) {
    console.log('FALHA NO TOKEN');
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
