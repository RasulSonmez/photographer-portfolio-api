const express = require("express");
const router = express.Router();
const { updateSeo, getSeo } = require("../controllers/seoController");
const protect = require("../middlewares/authMiddleware");

router.put("/:page", protect, updateSeo);
router.get("/:page", getSeo);

module.exports = router;
