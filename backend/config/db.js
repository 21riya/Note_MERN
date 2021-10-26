const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`connected to Mongo ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

module.exports = connectDb;
