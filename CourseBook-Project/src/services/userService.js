const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");
const { SECRET } = require("../constants");

async function validatepassword(password, userPassword) {
  // validate password
  const isValid = await bcrypt.compare(password, userPassword);

  if (!isValid) {
    throw new Error("Invalid email or password!");
  }
}

async function getToken(user) {
  const payload = { _id: user._id, email: user.email };
  const token = await jwt.sign(payload, SECRET, { expiresIn: "3d" });

  return token;
}

exports.register = async (userData) => {
  const { password } = userData;
  const user = await User.create(userData);

  await validatepassword(password, user.password);

  const token = await getToken(user);
  return token;
};

exports.login = async (email, password) => {
  const user = await User.findOne({ email });

  // validate user
  if (!user) {
    throw new Error("invalid email or password!");
  }

  await validatepassword(password, user.password);

  const token = await getToken(user);
  return token;
};


exports.getById = (id) => User.findOne({ _id: id });