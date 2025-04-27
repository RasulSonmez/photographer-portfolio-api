const express = require("express");
const router = express.Router();
const {
  login,
  register,
  changePassword,
  forgotPassword,
} = require("../controllers/authController");
const protect = require("../middlewares/authMiddleware");

if (process.env.NODE_ENV !== "production") {
  router.post("/register", register);
}

router.post("/login", login);

router.post("/forgot-password", forgotPassword);

router.post("/change-password", protect, changePassword);

module.exports = router;
