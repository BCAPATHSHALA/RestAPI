//STEP:05 create a Model that will define our database structure.
const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    name: {
      require: true,
      type: String,
    },
    age: {
      require: true,
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Data", dataSchema);
