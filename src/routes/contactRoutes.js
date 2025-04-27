const express = require("express");
const router = express.Router();
const {
  updateContactInfo,
  getContactInfo,
} = require("../controllers/contactController");
const protect = require("../middlewares/authMiddleware");

router.put("/", protect, updateContactInfo);
router.get("/", getContactInfo);

module.exports = router;
