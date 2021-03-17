const { sha256 } = require("js-sha256");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jwt-then");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const emailRegex = /@gmail.com|outlook.com/;

  if (!emailRegex.test(email)) throw "Email from this domain is not supported";
  if (password.length < 5) throw "Password must be at least 5 characters long.";

  const userExists = await User.findOne({
    email,
  });

  if (userExists) throw "User with provided email already exists.";
  const user = new User({
    name,
    email,
    password: sha256(password + process.env.SALT),
  });

  await user.save();

  res.json({
    message: "Success",
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
    password: sha256(password + process.env.SALT),
  });

  if (!user) throw "Email or password is incorrect";

  const token = await jwt.sign({ email: user.email }, process.env.SECRET);

  res.json({
    message: "User logged in succesfully",
    token,
    username: user.name,
  });
};

exports.delete = async (req, res) => {
  const { email, password } = req.body;
  await User.deleteOne({ email });

  res.json({
    message: "User deleted",
  });
};
