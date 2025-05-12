const express = require("express");
const router = express.Router();
const { updateSeo } = require("../controllers/seoController");
const protect = require("../middlewares/authMiddleware");

router.put("/update", protect, updateSeo);

module.exports = router;
