const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const userRegistration = async (email, password) => {
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw {
        status: 400,
        message: "User with this email already exists!",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || "your_jwt_secret",
      { expiresIn: "24h" }
    );

    return token;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const userConnection = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw {
        status: 401,
        message: "Invalid email or password!",
      };
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw {
        status: 401,
        message: "Invalid email or password!",
      };
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || "your_jwt_secret",
      { expiresIn: "24h" }
    );

    return token;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  userRegistration,
  userConnection,
};