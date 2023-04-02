require('dotenv').config();

const connectDB = require('./database');
const jwt = require('./jwt');

module.exports = { connectDB, jwt };
