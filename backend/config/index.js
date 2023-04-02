
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./database');

dotenv.config();

mongoose.set('debug', true);

module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  connectDB,
};
