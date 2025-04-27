const mongoose = require('mongoose');

const seoSchema = new mongoose.Schema({
  page: { type: String, required: true },
  title: String,
  description: String,
  keywords: [String]
});

module.exports = mongoose.model('Seo', seoSchema);
