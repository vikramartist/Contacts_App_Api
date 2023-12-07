const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the user name"],
    },
    email: {
      type: String,
      required: [true, "Please add the email"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      min: [7, "Password length should atleast be 7"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
