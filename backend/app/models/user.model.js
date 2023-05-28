const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 2
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: validator.isEmail
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  }
})

userSchema.virtual("roleNames", {
  ref: "Role",
  localField: "roles",
  foreignField: "_id",
  justOne: false
});

const User = mongoose.model("User", userSchema);

module.exports = User;