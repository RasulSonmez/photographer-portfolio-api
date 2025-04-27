const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema(
  {
    title: String,
    url: { type: String, required: true },
    type: { type: String, enum: ["photo", "video"], required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PortfolioCategory",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Media", mediaSchema);
