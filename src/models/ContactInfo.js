const mongoose = require("mongoose");

const contactInfoSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: [true, "Adres bilgisi zorunludur"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Telefon numarası zorunludur"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "E-posta adresi zorunludur"],
      trim: true,
      lowercase: true,
    },
    socialMediaLinks: {
      facebook: { type: String, trim: true },
      twitter: { type: String, trim: true },
      instagram: { type: String, trim: true },
      linkedin: { type: String, trim: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ContactInfo", contactInfoSchema);
