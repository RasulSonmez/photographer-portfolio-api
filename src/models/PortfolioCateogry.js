const mongoose = require("mongoose");

const portfolioCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Portföy kategori adı zorunludur"],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PortfolioCategory", portfolioCategorySchema);
