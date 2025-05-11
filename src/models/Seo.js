const mongoose = require("mongoose");

const seoSchema = new mongoose.Schema({
  page: { type: String, required: true },
  title: String,
  description: String,
});

module.exports = mongoose.model("Seo", seoSchema);
