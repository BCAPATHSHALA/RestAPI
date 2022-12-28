//STEP:02 How to Configure the MongoDB Database
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

module.exports = () => {
  const mongoUrl = process.env.mongoURL;
  try {
    mongoose.connect(
      mongoUrl,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("mongodb connected");
      }
    );
  } catch (error) {
    console.log(error);
  }
};
