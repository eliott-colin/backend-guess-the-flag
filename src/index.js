require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// Middlewares de base
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const v1AuthRouter = require("./v1/routes/authRoutes");
const v1UsersRouter = require("./v1/routes/userRoutes");

// Routes
app.use("/api/v1/auth", v1AuthRouter);
app.use("/api/v1/users", v1UsersRouter);

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

module.exports = app;