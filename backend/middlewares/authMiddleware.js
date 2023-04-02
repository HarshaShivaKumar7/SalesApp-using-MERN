const jwt = require('jsonwebtoken');
const { User } = require('../models');

const authMiddleware = async (req, res, next) => {
  try {
    // Get token from request header
    const token = req.header('Authorization').replace('Bearer ', '');

    // Verify token and decode payload
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user by ID from token payload
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!user) {
      throw new Error();
    }

    // Add user and token to request object
    req.user = user;
    req.token = token;

    next();
  } catch (error) {
    res.status(401).send({ error: 'Authentication failed.' });
  }
};

module.exports = authMiddleware;
