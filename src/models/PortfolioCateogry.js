const mongoose = require("mongoose");

const portfolioCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Portföy kategori adı zorunludur"],
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "passive"],
      default: "active",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PortfolioCategory", portfolioCategorySchema);
