const express = require("express");
const router = express.Router();
const {
  index,
  create,
  edit,
  deletedCategory,
} = require("../controllers/portfolioCategoryController");
const protect = require("../middlewares/authMiddleware");

router.get("/", protect, index);

router.post("/create", protect, create);

router.put("/update/:id", protect, edit);

router.delete("/delete/:id", protect, deletedCategory);

module.exports = router;
