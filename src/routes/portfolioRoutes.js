const express = require("express");
const router = express.Router();
const {
  createCategory,
  getCategories,
  addMedia,
} = require("../controllers/portfolioController");
const protect = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");

router.post("/categories", protect, createCategory);
router.get("/categories", getCategories);
router.post("/media", protect, upload.single("file"), addMedia);

module.exports = router;
