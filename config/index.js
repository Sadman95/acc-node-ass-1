require("dotenv").config();

module.exports = {
  DB_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
};
