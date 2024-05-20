const mongoose = require("mongoose");
// const bcypt = require("bcrypt");

//define the person schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  adharCardNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "voter"],
    default: ["voter"],
  },
  isVoted: {
    type: Boolean,
    default: false,
  },
});

//create user Model
const User = mongoose.model("User", userSchema);
module.exports = User;
