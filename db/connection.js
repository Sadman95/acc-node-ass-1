const mongoose = require("mongoose");
const { DB_URI } = require("../config");

const connection = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose
      .connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("SUCCESS : DB CONNECTED");
      });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = connection;
