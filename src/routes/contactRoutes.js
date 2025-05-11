const express = require("express");
const router = express.Router();
const { updateContactInfo } = require("../controllers/contactInfoclController");
const protect = require("../middlewares/authMiddleware");

router.put("/update", protect, updateContactInfo);

module.exports = router;
