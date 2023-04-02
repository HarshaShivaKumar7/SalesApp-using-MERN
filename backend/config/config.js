module.exports = {
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGO_URI || 'mongodb+srv://harshahs:0BZsU64DiSIfP2se@cluster0.6btye9x.mongodb.net/mern?retryWrites=true&w=majority',
    jwtSecret: process.env.JWT_SECRET || 'secret',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1d',
  };
  