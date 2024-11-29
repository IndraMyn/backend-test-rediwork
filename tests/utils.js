const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateTestToken = () => {
  const payload = { username: 'testuser' };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

module.exports = { generateTestToken };
