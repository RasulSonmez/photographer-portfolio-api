const express = require("express");
const router = express.Router();
const { updateContactInfo } = require("../controllers/contactInfoController");
const protect = require("../middlewares/authMiddleware");

router.put("/update", protect, updateContactInfo);

module.exports = router;
