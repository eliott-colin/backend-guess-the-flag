const authService = require("../services/authService");

const userRegistration = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await authService.userRegistration(email, password);
    res.status(201).json({ message: "User created successfully!", token });
  } catch (error) {
    res.status(error?.status || 500).json({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

const userConnection = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await authService.userConnection(email, password);
    res.status(200).json({ message: "Login successful!", token });
  } catch (error) {
    res.status(error?.status || 500).json({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

module.exports = {
  userRegistration,
  userConnection,
};