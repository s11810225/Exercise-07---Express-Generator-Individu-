const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
  },
  age: {
    type: Number,
    required: [true, "Age is Required"],
  },
  status: {
    type: String,
    enum: ["alive", "not alive"],
    default: "not alive",
  },
});

const users = mongoose.model("users", userSchema);

module.exports = users;
