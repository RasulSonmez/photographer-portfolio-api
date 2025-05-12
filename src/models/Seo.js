const mongoose = require("mongoose");

const seoSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 1,
    maxlength: 150,
    required: true,
  },
  description: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return v.length >= 70 && v.length <= 155;
      },
      message: "Description must be between 70 and 155 characters.",
    },
  },
});

module.exports = mongoose.model("Seo", seoSchema);
